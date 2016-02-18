import { curry, compose, prop, path, map } from 'ramda'
// import Task from 'data.task'
// import IO from 'lib/IO'

/**
 * Utils
 */

// makeImg : imgSrc -> Html Img
const makeImg = (imgSrc) =>
  $('<img />', { src: imgSrc })

const Impure = {
  // getJSON : (Json -> a) -> Url -> ()
  getJSON: curry((callback, url) =>
    $.getJSON(url, callback)
  ),

  // setHtml : DOMSelector -> Html -> HTML()
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

// makeUrl : String -> Url
const makeUrl = (url) =>
  `https://api.flickr.com/services/feeds/photos_public.gne?tags=${url}&format=json&jsoncallback=?`

// getSrcs : Json -> [ImgSrc]
const getSrcs =
  undefined

// getMediaUrl : { media: { m } } -> ImgSrc
const getMediaUrl =
  undefined

// getImages : Url -> [Html Img]
const getImages =
  undefined


/**
 * Impure
 */

// renderImages : Url -> HTML()
const renderImages =
  undefined

// app : String -> HTML()
const app =
  compose(Impure.getJSON(renderImages), undefined)


/** Run **/

app('cats')
