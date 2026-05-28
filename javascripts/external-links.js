document.addEventListener("DOMContentLoaded", function () {
  var here = window.location.hostname;
  document.querySelectorAll("article a[href]").forEach(function (a) {
    try {
      var url = new URL(a.href, window.location.href);
      if (url.hostname && url.hostname !== here) {
        a.target = "_blank";
        a.rel = "noopener noreferrer";
      }
    } catch (_) {
      /* ignore non-URL hrefs (mailto:, #anchor, etc.) */
    }
  });
});

if (typeof document$ !== "undefined") {
  document$.subscribe(function () {
    var here = window.location.hostname;
    document.querySelectorAll("article a[href]").forEach(function (a) {
      try {
        var url = new URL(a.href, window.location.href);
        if (url.hostname && url.hostname !== here) {
          a.target = "_blank";
          a.rel = "noopener noreferrer";
        }
      } catch (_) {}
    });
  });
}
