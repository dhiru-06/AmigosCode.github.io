
class TypeWriter{
    constructor(txtElement, words, wait = 500){
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }
    type(){
        //type method
   
    const current = this.wordIndex % this.words.length;
    
    //get full text of current word
    const fulltxt = this.words[current];
    
    //check if deleting
    if(this.isDeleting){
        //remove char
        this.txt = fulltxt.substring(0, this.txt.length - 1);
    } else{
        //add char
        this.txt = fulltxt.substring(0, this.txt.length + 1);
    }
    
    //insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
    
    //type speed
    let typeSpeed = 300;
    
    if(this.isDeleting){
        typeSpeed /=2;
    
    }
    
    //if word is complete
    if(!this.isDeleting && this.txt === fulltxt){
        //make a pause
        typeSpeed = this.wait;
        //delete
        this.isDeleting = true;
    
    
    }else if(this.isDeleting && this.txt === ''){
        this.isDeleting = false;
        this.wordIndex++;
        typeSpeed = 500;
    }
    
    
        setTimeout(() => this.type(), typeSpeed);
        
    }
}

//init on DOM load
document.addEventListener('DOMContentLoaded', init);

//init app
function init(){
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    //Init typewriter
    new TypeWriter(txtElement, words, wait);
}
