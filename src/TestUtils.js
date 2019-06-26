import React from 'react';
import { shallow } from 'enzyme';

export function shallowLoad(Component, props = {}) {
  return shallow(<Component {...props} />);
}

//mocks a successful res of 3 gifs
export const dummyData = 
{
  "data": [
    {
      "type": "gif",
      "id": "dzaUX7CAG0Ihi",
      "slug": "hello-hi-dzaUX7CAG0Ihi",
      "url": "https://giphy.com/gifs/hello-hi-dzaUX7CAG0Ihi",
      "bitly_gif_url": "https://gph.is/1Z8bw8m",
      "bitly_url": "https://gph.is/1Z8bw8m",
      "embed_url": "https://giphy.com/embed/dzaUX7CAG0Ihi",
      "username": "",
      "source": "https://www.reactiongifs.com/hello-bear/",
      "rating": "g",
      "content_url": "",
      "source_tld": "www.reactiongifs.com",
      "source_post_url": "https://www.reactiongifs.com/hello-bear/",
      "is_sticker": 0,
      "import_datetime": "2016-01-07 15:40:35",
      "trending_datetime": "2019-06-08 21:15:01",
      "images": {
        "fixed_height_still": {
          "url": "https://media3.giphy.com/media/dzaUX7CAG0Ihi/200_s.gif?cid=fedd91645d130fa3394471436f6cb02f&rid=200_s.gif",
          "width": "373",
          "height": "200",
          "size": "50147"
        },
        "original_still": {
          "url": "https://media3.giphy.com/media/dzaUX7CAG0Ihi/giphy_s.gif?cid=fedd91645d130fa3394471436f6cb02f&rid=giphy_s.gif",
          "width": "410",
          "height": "220",
          "size": "63828"
        },
        "fixed_width": {
          "url": "https://media3.giphy.com/media/dzaUX7CAG0Ihi/200w.gif?cid=fedd91645d130fa3394471436f6cb02f&rid=200w.gif",
          "width": "200",
          "height": "107",
          "size": "180904",
          "mp4": "https://media3.giphy.com/media/dzaUX7CAG0Ihi/200w.mp4?cid=fedd91645d130fa3394471436f6cb02f&rid=200w.mp4",
          "mp4_size": "18366",
          "webp": "https://media3.giphy.com/media/dzaUX7CAG0Ihi/200w.webp?cid=fedd91645d130fa3394471436f6cb02f&rid=200w.webp",
          "webp_size": "105844"
        },
        "fixed_height_small_still": {
          "url": "https://media3.giphy.com/media/dzaUX7CAG0Ihi/100_s.gif?cid=fedd91645d130fa3394471436f6cb02f&rid=100_s.gif",
          "width": "187",
          "height": "100",
          "size": "14171"
        },
        "fixed_height_downsampled": {
          "url": "https://media3.giphy.com/media/dzaUX7CAG0Ihi/200_d.gif?cid=fedd91645d130fa3394471436f6cb02f&rid=200_d.gif",
          "width": "373",
          "height": "200",
          "size": "291533",
          "webp": "https://media3.giphy.com/media/dzaUX7CAG0Ihi/200_d.webp?cid=fedd91645d130fa3394471436f6cb02f&rid=200_d.webp",
          "webp_size": "133810"
        },
        "preview": {
          "width": "276",
          "height": "148",
          "mp4": "https://media3.giphy.com/media/dzaUX7CAG0Ihi/giphy-preview.mp4?cid=fedd91645d130fa3394471436f6cb02f&rid=giphy-preview.mp4",
          "mp4_size": "36670"
        },
        "fixed_height_small": {
          "url": "https://media3.giphy.com/media/dzaUX7CAG0Ihi/100.gif?cid=fedd91645d130fa3394471436f6cb02f&rid=100.gif",
          "width": "187",
          "height": "100",
          "size": "163789",
          "mp4": "https://media3.giphy.com/media/dzaUX7CAG0Ihi/100.mp4?cid=fedd91645d130fa3394471436f6cb02f&rid=100.mp4",
          "mp4_size": "16137",
          "webp": "https://media3.giphy.com/media/dzaUX7CAG0Ihi/100.webp?cid=fedd91645d130fa3394471436f6cb02f&rid=100.webp",
          "webp_size": "94406"
        },
        "downsized_still": {
          "url": "https://media3.giphy.com/media/dzaUX7CAG0Ihi/giphy-downsized_s.gif?cid=fedd91645d130fa3394471436f6cb02f&rid=giphy-downsized_s.gif",
          "width": "410",
          "height": "220",
          "size": "63828"
        },
        "downsized": {
          "url": "https://media3.giphy.com/media/dzaUX7CAG0Ihi/giphy-downsized.gif?cid=fedd91645d130fa3394471436f6cb02f&rid=giphy-downsized.gif",
          "width": "410",
          "height": "220",
          "size": "820802"
        },
        "downsized_large": {
          "url": "https://media3.giphy.com/media/dzaUX7CAG0Ihi/giphy.gif?cid=fedd91645d130fa3394471436f6cb02f&rid=giphy.gif",
          "width": "410",
          "height": "220",
          "size": "820802"
        },
        "fixed_width_small_still": {
          "url": "https://media3.giphy.com/media/dzaUX7CAG0Ihi/100w_s.gif?cid=fedd91645d130fa3394471436f6cb02f&rid=100w_s.gif",
          "width": "100",
          "height": "54",
          "size": "5421"
        },
        "preview_webp": {
          "url": "https://media3.giphy.com/media/dzaUX7CAG0Ihi/giphy-preview.webp?cid=fedd91645d130fa3394471436f6cb02f&rid=giphy-preview.webp",
          "width": "147",
          "height": "79",
          "size": "49002"
        },
        "fixed_width_still": {
          "url": "https://media3.giphy.com/media/dzaUX7CAG0Ihi/200w_s.gif?cid=fedd91645d130fa3394471436f6cb02f&rid=200w_s.gif",
          "width": "200",
          "height": "107",
          "size": "15649"
        },
        "fixed_width_small": {
          "url": "https://media3.giphy.com/media/dzaUX7CAG0Ihi/100w.gif?cid=fedd91645d130fa3394471436f6cb02f&rid=100w.gif",
          "width": "100",
          "height": "54",
          "size": "51419",
          "mp4": "https://media3.giphy.com/media/dzaUX7CAG0Ihi/100w.mp4?cid=fedd91645d130fa3394471436f6cb02f&rid=100w.mp4",
          "mp4_size": "7293",
          "webp": "https://media3.giphy.com/media/dzaUX7CAG0Ihi/100w.webp?cid=fedd91645d130fa3394471436f6cb02f&rid=100w.webp",
          "webp_size": "35542"
        },
        "downsized_small": {
          "width": "410",
          "height": "220",
          "mp4": "https://media3.giphy.com/media/dzaUX7CAG0Ihi/giphy-downsized-small.mp4?cid=fedd91645d130fa3394471436f6cb02f&rid=giphy-downsized-small.mp4",
          "mp4_size": "109738"
        },
        "fixed_width_downsampled": {
          "url": "https://media3.giphy.com/media/dzaUX7CAG0Ihi/200w_d.gif?cid=fedd91645d130fa3394471436f6cb02f&rid=200w_d.gif",
          "width": "200",
          "height": "107",
          "size": "86004",
          "webp": "https://media3.giphy.com/media/dzaUX7CAG0Ihi/200w_d.webp?cid=fedd91645d130fa3394471436f6cb02f&rid=200w_d.webp",
          "webp_size": "45172"
        },
        "downsized_medium": {
          "url": "https://media3.giphy.com/media/dzaUX7CAG0Ihi/giphy.gif?cid=fedd91645d130fa3394471436f6cb02f&rid=giphy.gif",
          "width": "410",
          "height": "220",
          "size": "820802"
        },
        "original": {
          "url": "https://media3.giphy.com/media/dzaUX7CAG0Ihi/giphy.gif?cid=fedd91645d130fa3394471436f6cb02f&rid=giphy.gif",
          "width": "410",
          "height": "220",
          "size": "820802",
          "frames": "14",
          "mp4": "https://media3.giphy.com/media/dzaUX7CAG0Ihi/giphy.mp4?cid=fedd91645d130fa3394471436f6cb02f&rid=giphy.mp4",
          "mp4_size": "225207",
          "webp": "https://media3.giphy.com/media/dzaUX7CAG0Ihi/giphy.webp?cid=fedd91645d130fa3394471436f6cb02f&rid=giphy.webp",
          "webp_size": "393390",
          "hash": "a1e34b2993ed6acffe514f644ff00c1d"
        },
        "fixed_height": {
          "url": "https://media3.giphy.com/media/dzaUX7CAG0Ihi/200.gif?cid=fedd91645d130fa3394471436f6cb02f&rid=200.gif",
          "width": "373",
          "height": "200",
          "size": "641331",
          "mp4": "https://media3.giphy.com/media/dzaUX7CAG0Ihi/200.mp4?cid=fedd91645d130fa3394471436f6cb02f&rid=200.mp4",
          "mp4_size": "44121",
          "webp": "https://media3.giphy.com/media/dzaUX7CAG0Ihi/200.webp?cid=fedd91645d130fa3394471436f6cb02f&rid=200.webp",
          "webp_size": "310830"
        },
        "looping": {
          "mp4": "https://media3.giphy.com/media/dzaUX7CAG0Ihi/giphy-loop.mp4?cid=fedd91645d130fa3394471436f6cb02f&rid=giphy-loop.mp4",
          "mp4_size": "1334290"
        },
        "original_mp4": {
          "width": "480",
          "height": "256",
          "mp4": "https://media3.giphy.com/media/dzaUX7CAG0Ihi/giphy.mp4?cid=fedd91645d130fa3394471436f6cb02f&rid=giphy.mp4",
          "mp4_size": "75327"
        },
        "preview_gif": {
          "url": "https://media3.giphy.com/media/dzaUX7CAG0Ihi/giphy-preview.gif?cid=fedd91645d130fa3394471436f6cb02f&rid=giphy-preview.gif",
          "width": "127",
          "height": "68",
          "size": "49148"
        },
        "480w_still": {
          "url": "https://media4.giphy.com/media/dzaUX7CAG0Ihi/480w_s.jpg?cid=fedd91645d130fa3394471436f6cb02f&rid=480w_s.jpg",
          "width": "480",
          "height": "258"
        }
      },
      "title": "moving pictures hello GIF",
      "analytics": {
        "onload": {
          "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=5d130fa3394471436f6cb02f&event_type=GIF_SEARCH&gif_id=dzaUX7CAG0Ihi&action_type=SEEN"
        },
        "onclick": {
          "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=5d130fa3394471436f6cb02f&event_type=GIF_SEARCH&gif_id=dzaUX7CAG0Ihi&action_type=CLICK"
        },
        "onsent": {
          "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=5d130fa3394471436f6cb02f&event_type=GIF_SEARCH&gif_id=dzaUX7CAG0Ihi&action_type=SENT"
        }
      }
    },
    {
      "type": "gif",
      "id": "xT9IgG50Fb7Mi0prBC",
      "slug": "hello-hi-wave-xT9IgG50Fb7Mi0prBC",
      "url": "https://giphy.com/gifs/hello-hi-wave-xT9IgG50Fb7Mi0prBC",
      "bitly_gif_url": "https://gph.is/2fBD5dc",
      "bitly_url": "https://gph.is/2fBD5dc",
      "embed_url": "https://giphy.com/embed/xT9IgG50Fb7Mi0prBC",
      "username": "",
      "source": "https://www.reactiongifs.com/forrest/",
      "rating": "g",
      "content_url": "",
      "source_tld": "www.reactiongifs.com",
      "source_post_url": "https://www.reactiongifs.com/forrest/",
      "is_sticker": 0,
      "import_datetime": "2017-09-20 19:19:27",
      "trending_datetime": "2019-04-10 02:45:01",
      "images": {
        "fixed_height_still": {
          "url": "https://media2.giphy.com/media/xT9IgG50Fb7Mi0prBC/200_s.gif?cid=fedd91645d130fa3394471436f6cb02f&rid=200_s.gif",
          "width": "400",
          "height": "200",
          "size": "31769"
        },
        "original_still": {
          "url": "https://media2.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy_s.gif?cid=fedd91645d130fa3394471436f6cb02f&rid=giphy_s.gif",
          "width": "400",
          "height": "200",
          "size": "31769"
        },
        "fixed_width": {
          "url": "https://media2.giphy.com/media/xT9IgG50Fb7Mi0prBC/200w.gif?cid=fedd91645d130fa3394471436f6cb02f&rid=200w.gif",
          "width": "200",
          "height": "100",
          "size": "521339",
          "mp4": "https://media2.giphy.com/media/xT9IgG50Fb7Mi0prBC/200w.mp4?cid=fedd91645d130fa3394471436f6cb02f&rid=200w.mp4",
          "mp4_size": "51624",
          "webp": "https://media2.giphy.com/media/xT9IgG50Fb7Mi0prBC/200w.webp?cid=fedd91645d130fa3394471436f6cb02f&rid=200w.webp",
          "webp_size": "229006"
        },
        "fixed_height_small_still": {
          "url": "https://media2.giphy.com/media/xT9IgG50Fb7Mi0prBC/100_s.gif?cid=fedd91645d130fa3394471436f6cb02f&rid=100_s.gif",
          "width": "200",
          "height": "100",
          "size": "13167"
        },
        "fixed_height_downsampled": {
          "url": "https://media2.giphy.com/media/xT9IgG50Fb7Mi0prBC/200_d.gif?cid=fedd91645d130fa3394471436f6cb02f&rid=200_d.gif",
          "width": "400",
          "height": "200",
          "size": "286400",
          "webp": "https://media2.giphy.com/media/xT9IgG50Fb7Mi0prBC/200_d.webp?cid=fedd91645d130fa3394471436f6cb02f&rid=200_d.webp",
          "webp_size": "76404"
        },
        "preview": {
          "width": "196",
          "height": "98",
          "mp4": "https://media2.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy-preview.mp4?cid=fedd91645d130fa3394471436f6cb02f&rid=giphy-preview.mp4",
          "mp4_size": "22841"
        },
        "fixed_height_small": {
          "url": "https://media2.giphy.com/media/xT9IgG50Fb7Mi0prBC/100.gif?cid=fedd91645d130fa3394471436f6cb02f&rid=100.gif",
          "width": "200",
          "height": "100",
          "size": "521339",
          "mp4": "https://media2.giphy.com/media/xT9IgG50Fb7Mi0prBC/100.mp4?cid=fedd91645d130fa3394471436f6cb02f&rid=100.mp4",
          "mp4_size": "50958",
          "webp": "https://media2.giphy.com/media/xT9IgG50Fb7Mi0prBC/100.webp?cid=fedd91645d130fa3394471436f6cb02f&rid=100.webp",
          "webp_size": "229006"
        },
        "downsized_still": {
          "url": "https://media2.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy-downsized_s.gif?cid=fedd91645d130fa3394471436f6cb02f&rid=giphy-downsized_s.gif",
          "width": "400",
          "height": "200",
          "size": "31769"
        },
        "downsized": {
          "url": "https://media2.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy-downsized.gif?cid=fedd91645d130fa3394471436f6cb02f&rid=giphy-downsized.gif",
          "width": "400",
          "height": "200",
          "size": "1532237"
        },
        "downsized_large": {
          "url": "https://media2.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.gif?cid=fedd91645d130fa3394471436f6cb02f&rid=giphy.gif",
          "width": "400",
          "height": "200",
          "size": "1532237"
        },
        "fixed_width_small_still": {
          "url": "https://media2.giphy.com/media/xT9IgG50Fb7Mi0prBC/100w_s.gif?cid=fedd91645d130fa3394471436f6cb02f&rid=100w_s.gif",
          "width": "100",
          "height": "50",
          "size": "4455"
        },
        "preview_webp": {
          "url": "https://media2.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy-preview.webp?cid=fedd91645d130fa3394471436f6cb02f&rid=giphy-preview.webp",
          "width": "210",
          "height": "105",
          "size": "49602"
        },
        "fixed_width_still": {
          "url": "https://media2.giphy.com/media/xT9IgG50Fb7Mi0prBC/200w_s.gif?cid=fedd91645d130fa3394471436f6cb02f&rid=200w_s.gif",
          "width": "200",
          "height": "100",
          "size": "13167"
        },
        "fixed_width_small": {
          "url": "https://media2.giphy.com/media/xT9IgG50Fb7Mi0prBC/100w.gif?cid=fedd91645d130fa3394471436f6cb02f&rid=100w.gif",
          "width": "100",
          "height": "50",
          "size": "140692",
          "mp4": "https://media2.giphy.com/media/xT9IgG50Fb7Mi0prBC/100w.mp4?cid=fedd91645d130fa3394471436f6cb02f&rid=100w.mp4",
          "mp4_size": "19402",
          "webp": "https://media2.giphy.com/media/xT9IgG50Fb7Mi0prBC/100w.webp?cid=fedd91645d130fa3394471436f6cb02f&rid=100w.webp",
          "webp_size": "82266"
        },
        "downsized_small": {
          "width": "360",
          "height": "180",
          "mp4": "https://media2.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy-downsized-small.mp4?cid=fedd91645d130fa3394471436f6cb02f&rid=giphy-downsized-small.mp4",
          "mp4_size": "63508"
        },
        "fixed_width_downsampled": {
          "url": "https://media2.giphy.com/media/xT9IgG50Fb7Mi0prBC/200w_d.gif?cid=fedd91645d130fa3394471436f6cb02f&rid=200w_d.gif",
          "width": "200",
          "height": "100",
          "size": "78137",
          "webp": "https://media2.giphy.com/media/xT9IgG50Fb7Mi0prBC/200w_d.webp?cid=fedd91645d130fa3394471436f6cb02f&rid=200w_d.webp",
          "webp_size": "26802"
        },
        "downsized_medium": {
          "url": "https://media2.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.gif?cid=fedd91645d130fa3394471436f6cb02f&rid=giphy.gif",
          "width": "400",
          "height": "200",
          "size": "1532237"
        },
        "original": {
          "url": "https://media2.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.gif?cid=fedd91645d130fa3394471436f6cb02f&rid=giphy.gif",
          "width": "400",
          "height": "200",
          "size": "1532237",
          "frames": "52",
          "mp4": "https://media2.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.mp4?cid=fedd91645d130fa3394471436f6cb02f&rid=giphy.mp4",
          "mp4_size": "188667",
          "webp": "https://media2.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.webp?cid=fedd91645d130fa3394471436f6cb02f&rid=giphy.webp",
          "webp_size": "653964",
          "hash": "dea757acbccd153e3a43a0c943211e5b"
        },
        "fixed_height": {
          "url": "https://media2.giphy.com/media/xT9IgG50Fb7Mi0prBC/200.gif?cid=fedd91645d130fa3394471436f6cb02f&rid=200.gif",
          "width": "400",
          "height": "200",
          "size": "1725226",
          "mp4": "https://media2.giphy.com/media/xT9IgG50Fb7Mi0prBC/200.mp4?cid=fedd91645d130fa3394471436f6cb02f&rid=200.mp4",
          "mp4_size": "130534",
          "webp": "https://media2.giphy.com/media/xT9IgG50Fb7Mi0prBC/200.webp?cid=fedd91645d130fa3394471436f6cb02f&rid=200.webp",
          "webp_size": "653964"
        },
        "looping": {
          "mp4": "https://media2.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy-loop.mp4?cid=fedd91645d130fa3394471436f6cb02f&rid=giphy-loop.mp4",
          "mp4_size": "1809441"
        },
        "original_mp4": {
          "width": "480",
          "height": "240",
          "mp4": "https://media2.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.mp4?cid=fedd91645d130fa3394471436f6cb02f&rid=giphy.mp4",
          "mp4_size": "188667"
        },
        "preview_gif": {
          "url": "https://media2.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy-preview.gif?cid=fedd91645d130fa3394471436f6cb02f&rid=giphy-preview.gif",
          "width": "136",
          "height": "68",
          "size": "49485"
        },
        "480w_still": {
          "url": "https://media3.giphy.com/media/xT9IgG50Fb7Mi0prBC/480w_s.jpg?cid=fedd91645d130fa3394471436f6cb02f&rid=480w_s.jpg",
          "width": "480",
          "height": "240"
        }
      },
      "title": "tom hanks hello GIF",
      "analytics": {
        "onload": {
          "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=5d130fa3394471436f6cb02f&event_type=GIF_SEARCH&gif_id=xT9IgG50Fb7Mi0prBC&action_type=SEEN"
        },
        "onclick": {
          "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=5d130fa3394471436f6cb02f&event_type=GIF_SEARCH&gif_id=xT9IgG50Fb7Mi0prBC&action_type=CLICK"
        },
        "onsent": {
          "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=5d130fa3394471436f6cb02f&event_type=GIF_SEARCH&gif_id=xT9IgG50Fb7Mi0prBC&action_type=SENT"
        }
      }
    },
    {
      "type": "gif",
      "id": "Cmr1OMJ2FN0B2",
      "slug": "hello-Cmr1OMJ2FN0B2",
      "url": "https://giphy.com/gifs/hello-Cmr1OMJ2FN0B2",
      "bitly_gif_url": "https://gph.is/2bZufS7",
      "bitly_url": "https://gph.is/2bZufS7",
      "embed_url": "https://giphy.com/embed/Cmr1OMJ2FN0B2",
      "username": "",
      "source": "https://www.fanpop.com/clubs/penguins-of-madagascar/images/37800672/title/hello-photo",
      "rating": "g",
      "content_url": "",
      "source_tld": "www.fanpop.com",
      "source_post_url": "https://www.fanpop.com/clubs/penguins-of-madagascar/images/37800672/title/hello-photo",
      "is_sticker": 0,
      "import_datetime": "2016-09-05 13:48:36",
      "trending_datetime": "2019-06-02 18:30:02",
      "images": {
        "fixed_height_still": {
          "url": "https://media1.giphy.com/media/Cmr1OMJ2FN0B2/200_s.gif?cid=fedd91645d130fa3394471436f6cb02f&rid=200_s.gif",
          "width": "200",
          "height": "200"
        },
        "original_still": {
          "url": "https://media1.giphy.com/media/Cmr1OMJ2FN0B2/giphy_s.gif?cid=fedd91645d130fa3394471436f6cb02f&rid=giphy_s.gif",
          "width": "500",
          "height": "500"
        },
        "fixed_width": {
          "url": "https://media1.giphy.com/media/Cmr1OMJ2FN0B2/200w.gif?cid=fedd91645d130fa3394471436f6cb02f&rid=200w.gif",
          "width": "200",
          "height": "200",
          "size": "312684",
          "mp4": "https://media1.giphy.com/media/Cmr1OMJ2FN0B2/200w.mp4?cid=fedd91645d130fa3394471436f6cb02f&rid=200w.mp4",
          "mp4_size": "15710",
          "webp": "https://media1.giphy.com/media/Cmr1OMJ2FN0B2/200w.webp?cid=fedd91645d130fa3394471436f6cb02f&rid=200w.webp",
          "webp_size": "169344"
        },
        "fixed_height_small_still": {
          "url": "https://media1.giphy.com/media/Cmr1OMJ2FN0B2/100_s.gif?cid=fedd91645d130fa3394471436f6cb02f&rid=100_s.gif",
          "width": "100",
          "height": "100"
        },
        "fixed_height_downsampled": {
          "url": "https://media1.giphy.com/media/Cmr1OMJ2FN0B2/200_d.gif?cid=fedd91645d130fa3394471436f6cb02f&rid=200_d.gif",
          "width": "200",
          "height": "200",
          "size": "99748",
          "webp": "https://media1.giphy.com/media/Cmr1OMJ2FN0B2/200_d.webp?cid=fedd91645d130fa3394471436f6cb02f&rid=200_d.webp",
          "webp_size": "44892"
        },
        "preview": {
          "width": "392",
          "height": "392",
          "mp4": "https://media1.giphy.com/media/Cmr1OMJ2FN0B2/giphy-preview.mp4?cid=fedd91645d130fa3394471436f6cb02f&rid=giphy-preview.mp4",
          "mp4_size": "41818"
        },
        "fixed_height_small": {
          "url": "https://media1.giphy.com/media/Cmr1OMJ2FN0B2/100.gif?cid=fedd91645d130fa3394471436f6cb02f&rid=100.gif",
          "width": "100",
          "height": "100",
          "size": "95760",
          "mp4": "https://media1.giphy.com/media/Cmr1OMJ2FN0B2/100.mp4?cid=fedd91645d130fa3394471436f6cb02f&rid=100.mp4",
          "mp4_size": "7436",
          "webp": "https://media1.giphy.com/media/Cmr1OMJ2FN0B2/100.webp?cid=fedd91645d130fa3394471436f6cb02f&rid=100.webp",
          "webp_size": "64744"
        },
        "downsized_still": {
          "url": "https://media1.giphy.com/media/Cmr1OMJ2FN0B2/giphy-downsized_s.gif?cid=fedd91645d130fa3394471436f6cb02f&rid=giphy-downsized_s.gif",
          "width": "500",
          "height": "500",
          "size": "94443"
        },
        "downsized": {
          "url": "https://media1.giphy.com/media/Cmr1OMJ2FN0B2/giphy-downsized.gif?cid=fedd91645d130fa3394471436f6cb02f&rid=giphy-downsized.gif",
          "width": "500",
          "height": "500",
          "size": "1896880"
        },
        "downsized_large": {
          "url": "https://media1.giphy.com/media/Cmr1OMJ2FN0B2/giphy.gif?cid=fedd91645d130fa3394471436f6cb02f&rid=giphy.gif",
          "width": "500",
          "height": "500",
          "size": "1896880"
        },
        "fixed_width_small_still": {
          "url": "https://media1.giphy.com/media/Cmr1OMJ2FN0B2/100w_s.gif?cid=fedd91645d130fa3394471436f6cb02f&rid=100w_s.gif",
          "width": "100",
          "height": "100"
        },
        "preview_webp": {
          "url": "https://media1.giphy.com/media/Cmr1OMJ2FN0B2/giphy-preview.webp?cid=fedd91645d130fa3394471436f6cb02f&rid=giphy-preview.webp",
          "width": "162",
          "height": "162",
          "size": "49850"
        },
        "fixed_width_still": {
          "url": "https://media1.giphy.com/media/Cmr1OMJ2FN0B2/200w_s.gif?cid=fedd91645d130fa3394471436f6cb02f&rid=200w_s.gif",
          "width": "200",
          "height": "200"
        },
        "fixed_width_small": {
          "url": "https://media1.giphy.com/media/Cmr1OMJ2FN0B2/100w.gif?cid=fedd91645d130fa3394471436f6cb02f&rid=100w.gif",
          "width": "100",
          "height": "100",
          "size": "95760",
          "mp4": "https://media1.giphy.com/media/Cmr1OMJ2FN0B2/100w.mp4?cid=fedd91645d130fa3394471436f6cb02f&rid=100w.mp4",
          "mp4_size": "7436",
          "webp": "https://media1.giphy.com/media/Cmr1OMJ2FN0B2/100w.webp?cid=fedd91645d130fa3394471436f6cb02f&rid=100w.webp",
          "webp_size": "64744"
        },
        "downsized_small": {
          "width": "500",
          "height": "500",
          "mp4": "https://media1.giphy.com/media/Cmr1OMJ2FN0B2/giphy-downsized-small.mp4?cid=fedd91645d130fa3394471436f6cb02f&rid=giphy-downsized-small.mp4",
          "mp4_size": "81159"
        },
        "fixed_width_downsampled": {
          "url": "https://media1.giphy.com/media/Cmr1OMJ2FN0B2/200w_d.gif?cid=fedd91645d130fa3394471436f6cb02f&rid=200w_d.gif",
          "width": "200",
          "height": "200",
          "size": "99748",
          "webp": "https://media1.giphy.com/media/Cmr1OMJ2FN0B2/200w_d.webp?cid=fedd91645d130fa3394471436f6cb02f&rid=200w_d.webp",
          "webp_size": "44892"
        },
        "downsized_medium": {
          "url": "https://media1.giphy.com/media/Cmr1OMJ2FN0B2/giphy.gif?cid=fedd91645d130fa3394471436f6cb02f&rid=giphy.gif",
          "width": "500",
          "height": "500",
          "size": "1896880"
        },
        "original": {
          "url": "https://media1.giphy.com/media/Cmr1OMJ2FN0B2/giphy.gif?cid=fedd91645d130fa3394471436f6cb02f&rid=giphy.gif",
          "width": "500",
          "height": "500",
          "size": "1896880",
          "frames": "23",
          "mp4": "https://media1.giphy.com/media/Cmr1OMJ2FN0B2/giphy.mp4?cid=fedd91645d130fa3394471436f6cb02f&rid=giphy.mp4",
          "mp4_size": "54796",
          "webp": "https://media1.giphy.com/media/Cmr1OMJ2FN0B2/giphy.webp?cid=fedd91645d130fa3394471436f6cb02f&rid=giphy.webp",
          "webp_size": "697738"
        },
        "fixed_height": {
          "url": "https://media1.giphy.com/media/Cmr1OMJ2FN0B2/200.gif?cid=fedd91645d130fa3394471436f6cb02f&rid=200.gif",
          "width": "200",
          "height": "200",
          "size": "312684",
          "mp4": "https://media1.giphy.com/media/Cmr1OMJ2FN0B2/200.mp4?cid=fedd91645d130fa3394471436f6cb02f&rid=200.mp4",
          "mp4_size": "15710",
          "webp": "https://media1.giphy.com/media/Cmr1OMJ2FN0B2/200.webp?cid=fedd91645d130fa3394471436f6cb02f&rid=200.webp",
          "webp_size": "169344"
        },
        "looping": {
          "mp4": "https://media1.giphy.com/media/Cmr1OMJ2FN0B2/giphy-loop.mp4?cid=fedd91645d130fa3394471436f6cb02f&rid=giphy-loop.mp4",
          "mp4_size": "966495"
        },
        "original_mp4": {
          "width": "480",
          "height": "480",
          "mp4": "https://media1.giphy.com/media/Cmr1OMJ2FN0B2/giphy.mp4?cid=fedd91645d130fa3394471436f6cb02f&rid=giphy.mp4",
          "mp4_size": "54796"
        },
        "preview_gif": {
          "url": "https://media1.giphy.com/media/Cmr1OMJ2FN0B2/giphy-preview.gif?cid=fedd91645d130fa3394471436f6cb02f&rid=giphy-preview.gif",
          "width": "115",
          "height": "115",
          "size": "49005"
        },
        "480w_still": {
          "url": "https://media3.giphy.com/media/Cmr1OMJ2FN0B2/480w_s.jpg?cid=fedd91645d130fa3394471436f6cb02f&rid=480w_s.jpg",
          "width": "480",
          "height": "480"
        }
      },
      "title": "bom dia hello GIF",
      "analytics": {
        "onload": {
          "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=5d130fa3394471436f6cb02f&event_type=GIF_SEARCH&gif_id=Cmr1OMJ2FN0B2&action_type=SEEN"
        },
        "onclick": {
          "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=5d130fa3394471436f6cb02f&event_type=GIF_SEARCH&gif_id=Cmr1OMJ2FN0B2&action_type=CLICK"
        },
        "onsent": {
          "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=5d130fa3394471436f6cb02f&event_type=GIF_SEARCH&gif_id=Cmr1OMJ2FN0B2&action_type=SENT"
        }
      }
    }
  ],
  "pagination": {
    "total_count": 16251,
    "count": 3,
    "offset": 0
  },
  "meta": {
    "status": 200,
    "msg": "OK",
    "response_id": "5d130fa3394471436f6cb02f"
  }
}