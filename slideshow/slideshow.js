// This function setup is an immediately invoked function that keeps our variable out of the global scope 
// Also known as encapsulation
function imageSwitcher(){
    'useStrict'
    const myImages= ['images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg', 'images/image4.jpg', 'images/image5.jpg'];
    const imageCont= document.getElementById('images');
    let currentImg= 0;

    const nextSlide= document.getElementById('next');
    const preSlide= document.getElementById('previous');

    function nextPic(e){
        currentImg++;
        if (currentImg > myImages.length-1){
            currentImg= 0
        }
        document.getElementById('myImage').src=myImages[currentImg];
        e.preventDefault();
    }
    nextSlide.addEventListener('click', nextPic)

    function prePic(e){
        currentImg--;
        if (currentImg < 0){
            currentImg= myImages.length-1
        }
        document.getElementById('myImage').src=myImages[currentImg];
        e.preventDefault();
    }
    preSlide.addEventListener('click',prePic)
};
imageSwitcher();