// thin wrapper around `fetch()` to ensure we only expose the properties provided by
// the XHR polyfil; / fetch-readablestream Response API.
export default function fetchRequest(url, options) {
  return fetch(url, options)
    .then(r => {
      return {
        body: r.body,
        headers: r.headers,
        ok: r.ok,
        status: r.status,
        statusText: r.statusText,
        url: r.url
      };
    });
}
