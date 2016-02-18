import { curry, compose, prop, map } from 'ramda'

/**
 * Utils
 */
const makeImg = (url) =>
  $('<img />', { src: url })

const Impure = {
  getJSON: curry((callback, url) =>
    $.getJSON(url, callback)
  ),

  setHtml: curry((selector, html) =>
    $(selector).html(html)
  ),
}

const log = curry((tag, x) => {
    console.log(tag, x)
    return x
})


/**
 * Pure
 */

const makeUrl = (url) =>
  `https://api.flickr.com/services/feeds/photos_public.gne?tags=${url}&format=json&jsoncallback=?`

const getMediaUrl =
  compose(prop('m'), prop('media'))

const getSrcs =
  compose(map(getMediaUrl), prop('items'))

const getImages =
  compose(map(makeImg), getSrcs)


/**
 * Impure
 */

const renderImages =
  compose(Impure.setHtml('#main'), getImages)

const app =
  compose(Impure.getJSON(renderImages), makeUrl)


/**
 * Run
 */

app('cats')
