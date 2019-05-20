function onMsgSubmit() {
    const msg_area_value = document.getElementById("msg_area").value;
    document.getElementById("post_messages").innerHTML += msg_area_value + '<br/>';
}

function deleteMessages() {
    document.getElementById("post_messages").innerHTML = "";
}

function loadMessages() {
    const text = '{ "name":"Erica", "age":21, "city":"Vancouver"}';
    const message = '{ "hobbies":[ "Playing Piano", "Singing", "Dancing" ], "food": "sushi"}';
    let x = "";
    let i = 0;
    const param = JSON.parse(text);
    const param2 = JSON.parse(message);

    document.getElementById("post_messages").innerHTML +=
        "My name is " + param.name + ". I am " + param.age + " years old. I live in " + param.city + '<br/>';

    for (i = 0; i < param2.hobbies.length; i++) {
        x += param2.hobbies[i] + " ";
    }

    document.getElementById("post_messages").innerHTML +=
        "Some of my hobbies include " + x + '. <br/>' + "What are your hobbies?" + '<br/>';


}
