function clickForMore() {
  $('.show_more').each(function(i, el) {
    if (!$(el).attr('style')) el.click();
  });
}

function getInfo() {
  var username = $('.userName').text(),
      station = $('.hed-1').text(),
      thumbedUpTracks = $('.thumb_up_list').children(),
      thumbedDownTracks = $('.thumb_down_list').children(),
      data = {thumbUp: [], thumbDown: []};

  $(thumbedUpTracks).each(function(i, el) {
    var $el = $(el),
        artist = $el.data('artist'),
        track = $($('a', $el)[1]).text(),
        date = $('.col2', $el).text();
    data.thumbUp.push({date: date, artist: artist, track: track});
  });

  $(thumbedDownTracks).each(function(i, el) {
    var $el = $(el),
        artist = $el.data('artist'),
        track = $($('a', $el)[1]).text(),
        date = $('.col2', $el).text();
    data.thumbDown.push({date: date, artist: artist, track: track});
  });

  console.log(data);
}
