
DEFAULT = "{{ site.default_thumb }}";

// Helper: shorten a string
function excerptedString(str) {
  str = str || '';
  if (str.length < 40) {
    return str;
  } else {
    return `${str.substring(0, 40)} ...`;
  }
}

function getThumbnail(item, url) {
  if (item.thumbnail) {
    return `<img class='sq-thumb-sm' src='${url}${item.thumbnail}'/>&nbsp;&nbsp;&nbsp;`
  } else {
    return `<img class='sq-thumb-sm' src='${url}${DEFAULT}'/>&nbsp;&nbsp;&nbsp;`
  }
}

function displayResult(item, result, url) {
  var label = item.label || 'Untitled';
  var link  = item.permalink ? item.permalink.toLowerCase() : '#';
  var thumb = getThumbnail(item, url);

  var matchedField = '';
  var matchedTerm = '';

  if (result.matchData && result.matchData.metadata) {
    const metadata = result.matchData.metadata;
    const terms = Object.keys(metadata);
    if (terms.length > 0) {
      matchedTerm = terms[0];
      const fields = Object.keys(metadata[matchedTerm]);
      if (fields.length > 0) {
        matchedField = fields[0];
      }
    }
  }

  var displayFields = [];
  if (matchedField && matchedTerm) {
    displayFields.push(`<b>Match in:</b> ${matchedField}`);
    displayFields.push(`<b>Matched term:</b> ${matchedTerm}`);
  }

  var editionMeta = [];
  if (item.creator) editionMeta.push(`<b>Creator:</b> ${excerptedString(item.creator)}`);
  if (item._date) editionMeta.push(`<b>Date:</b> ${excerptedString(item._date)}`);

  return `<div class="result">
    <a href="${url}${link}">
      ${thumb}
      <p>
        <span class="title">${label}</span><br>
        <span class="meta">${displayFields.join(' | ')}</span><br>
        <span class="meta-small">${editionMeta.join(' | ')}</span>
      </p>
    </a>
  </div>`;
}

function startSearchUI(fields, indexFile, url) {
  $.getJSON(indexFile, function(store) {
    var index  = new elasticlunr.Index;

    index.saveDocument(false);
    index.setRef('lunr_id');

    for (i in fields) { index.addField(fields[i]); }
    for (i in store)  { index.addDoc(store[i]); }

    $('input#search').on('keyup', function() {
      var results_div = $('#results');
      var query       = $(this).val();
      var results     = index.search(query, { bool: 'AND', expand: true });

      results_div.empty();
      results_div.append(`<p class="results-info">Displaying ${results.length} results</p>`);

      for (var r in results) {
        var ref    = results[r].ref;
        var item   = store[ref];
        var result = displayResult(item, results[r], url);

        results_div.append(result);
      }
    });
  });
}
