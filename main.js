Webcam.set({
    width: 400,
    height: 300,
    image_format: 'jpg',
    jpg_quality: 100
});

Webcam.attach("camera");

function click1() {
    Webcam.snap(function (data_uri) {
        document.getElementById("picture").innerHTML = '<img id="capturedpicture" src="' + data_uri + '" >';
    });
}

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/0iVEMPLlf/model.json', modelready);

function modelready() {
    console.log('Model is working');
}
