var options = [
  // open as
  "openas",
  // 引用符
  "quotationMarks",
  // 文字数
  "charactersCounting"];

function emptyCheck(valueToCheck) {
  return Boolean(valueToCheck);
}

$(window).load(function () {
  for (i = 0; i < options.length; i++) {
    var configItem = options[i];
    var valueSaved = localStorage.getItem(configItem);
    console.log("restore item:" + configItem);
    console.log(valueSaved);
    if (emptyCheck(valueSaved)) {
      document.getElementById(configItem).value = valueSaved;
      // $("#" + configItem).val(valueSaved);
    }
  }
});

$(document).on('change', "select", function () {
  for (i = 0; i < options.length; i++) {
    var configItem = options[i];
    var valueToSave = document.getElementById(configItem).value;
    console.log("save item:" + configItem);
    console.log(valueToSave);
    if (emptyCheck(valueToSave)) {
      localStorage.setItem(configItem, valueToSave);
    } else {
      localStorage.removeItem(configItem);
    }
  }
  var status = document.getElementById('status');
  status.textContent = 'Option saved.';
  setTimeout(function () { status.textContent = ''; }, 750);
});