// const hide_answer = document.querySelectorAll('.answer')
// const icon_plus = document.querySelectorAll('.icon-plus')
// const icon_minus = document.querySelectorAll('.icon-minus')


function hideShowAnswer(parent) {
    
    // for (let i = 0; i < hide_answer.length; i++) {
    //     const eleAnswer = hide_answer[i];
    //     const eleMinus = icon_minus[i];
    //     const elePlus = icon_plus[i];
    
    //     eleAnswer.classList.add('hide');
    //     eleMinus.classList.add('hide');
    //     elePlus.classList.remove('hide');
    // }

    const show = parent.children[0].children[1];
    const hide = parent.children[0].children[2];
    const answer = parent.children[1];
    
    show.classList.toggle('hide');
    answer.classList.toggle('hide');
    hide.classList.toggle('hide');
    
    
}




