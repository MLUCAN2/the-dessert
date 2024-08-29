// This function setup is an immediately invoked function that keeps our variable out of the global scope 
// Also known as encapsulation
function imageSwitcher(){
    'useStrict'
    const myImages= ['images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg', 'images/image4.jpg', 'images/image5.jpg'];
    let currentImg= 0;

    document.getElementById('next').onclick= nextPic;
    document.getElementById('previous').onclick= prePic;

    function nextPic(){
        currentImg++;
        if (currentImg > myImages.length-1){
            currentImg= 0
        }
        document.getElementById('myImage').src=myImages[currentImg];
    }

    function prePic(){
        currentImg--;
        if (currentImg < 0){
            currentImg= myImages.length-1
        }
        document.getElementById('myImage').src=myImages[currentImg];
    }
};
imageSwitcher();