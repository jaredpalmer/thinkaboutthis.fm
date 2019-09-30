/**
 * Copyright 2018 Uptime Ventures, Ltd.
 * All rights reserved.
 *
 * Usage of this source code is governed by a BSD-style
 * license that can be found in LICENSE.md, at the root
 * of this repository. Alternatively, visit
 * https://spdx.org/licenses/BSD-3-Clause.html.
 *
 * @flow
 */

const crypto = require('crypto');
const rp = require('request-promise');
const { parseString } = require('xml2js');
const lget = require('lodash.get');

const transform = i =>
  new Promise((resolve, reject) =>
    parseString(i, (e, p) => (e ? reject(e) : resolve(p)))
  );

const load = uri => rp({ uri, transform });

const select = (i, key, fallback) => {
  const value = lget(i, key, fallback);
  if (Array.isArray(value)) {
    return value[0];
  }

  return value;
};

const digest = i =>
  crypto
    .createHash('md5')
    .update(JSON.stringify(i))
    .digest('hex');

/**
 * Slugify a string
 * @param s Any string
 */
function toSlug(s) {
  if (!s) {
    return '';
  }
  s = s.toLowerCase().trim();
  s = s.replace(/ & /g, ' and ');
  s = s.replace(/[ ]+/g, '-');
  s = s.replace(/[-]+/g, '-');
  s = s.replace(/[^a-z0-9-]+/g, '');
  return s;
}

const createChildren = (channel, episodes, parent, createNode) => {
  const children = [];
  episodes.forEach(n => {
    const link = toSlug(select(n, 'title'));
    children.push(link);
    const node = {
      id: toSlug(select(n, 'title')),
      title: select(n, 'title'),
      description: select(n, 'itunes:summary'),
      html: select(n, 'itunes:summary'),
      // Fix the date
      date: new Date(select(n, 'pubDate')).toISOString(),
      // Extract out the embed URL
      artwork: lget(
        n,
        'itunes:image[0].$.href',
        lget(channel, 'itunes:image[0].$.href')
      ),
      // https://traffic.megaphone.fm/WWO8877459010.mp3
      // <iframe frameborder="no" height="200" scrolling="no" src="https://player.megaphone.fm/DEM1119155060?" width="100%"></iframe>
      embed: select(n, 'enclosure[0].$.url')
        .replace('.mp3', '')
        .replace('https://traffic.', 'https://player.'),
      //   .split('/')
      //   .slice(0, 4)
      //   .join('/'),
      audioUrl: select(n, 'enclosure[0].$.url'),
      duration: select(n, 'itunes:duration'),
      // keywords: select(n, 'itunes:keywords') || [],
      episodeType: lget(n, 'itunes:episodeType', null),
      episodeNumber: lget(n, 'itunes:episode', -1),
      link,
      parent,
      children: [],
    };

    // console.log(node);
    node.internal = {
      type: 'Episode',
      contentDigest: digest(node),
    };

    createNode(node);
  });
  // console.log(children);
  return children;
};
module.exports = {
  select,
  load,
  createChildren,
};
