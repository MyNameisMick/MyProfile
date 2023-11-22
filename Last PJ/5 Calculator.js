function Click(){
    const Onepiece = Number(document.getElementById('onepiece').value)
    const calcu = document.getElementById('calcu').value
    const Twopiece = Number(document.getElementById('twopiece').value)

    if (calcu == '-'){document.getElementById('EA').innerHTML = Onepiece - Twopiece}

    else if (calcu == '+'){document.getElementById('EA').innerHTML = Onepiece + Twopiece}

    else if (calcu == '/'){document.getElementById('EA').innerHTML = Onepiece / Twopiece}

    else if (calcu == '**'){document.getElementById('EA').innerHTML = Onepiece ** Twopiece}

    else if (calcu == '*'){document.getElementById('EA').innerHTML = Onepiece * Twopiece}
}   
    function reset(){
        location.reload();
}

