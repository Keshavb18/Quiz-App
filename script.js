function checkAnswers() {
    var score = 0;

    if (document.getElementById('q1a').checked) { score++; }
    if (document.getElementById('q2a').checked) { score++; }
    if (document.getElementById('q3a').checked) { score++; }
    if (document.getElementById('q4a').checked) { score++; }

    document.getElementById('result').textContent = 'You scored ' + score + ' out of 4!';
}



