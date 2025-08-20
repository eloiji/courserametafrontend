var age = 77;
if (age >= 65) {
    console.log('You get your income from your pension.');
} else if (age >= 18 && age < 65) {
    console.log('Each month you get a salary');
} else if (age < 18) {
    console.log('You get an allowance');
} else {
    console.log('The value of the age variable is not numerical');
}

var day = 'dcdscs';
switch (day) {
    case 'Monday':
        console.log('Today is Monday');
        break;
    case 'Tuesday':
        console.log('Today is Tuesday');
        break;
    case 'Wednesday':
        console.log('Today is Wednesday');
        break;
    case 'Thursday':
        console.log('Today is Thursday');
        break;
    case 'Friday':
        console.log('Today is Friday');
        break;
    case 'Saturday':
        console.log('Today is Saturday');
        break;
    case 'Sunday':
        console.log('Today is Sunday');
        break;
    default:
       console.log('There is no such day');
       break;
}

var cubes = 'ABCDEFG';
//styling console output using CSS with a %c format specifier
for (var i = 0; i < cubes.length; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}