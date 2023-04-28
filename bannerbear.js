const { Bannerbear } = require('bannerbear');
const bb = new Bannerbear(process.env.BB_API_KEY);
const TEMPLATE_ID = 'APW1bDp49YKdj347zjmVoORax'; //replace this with your own template ID

exports.generateWallpaper = async function(todoTasks, calendarObj) {

  var modifications =  [
    {
      "name": "todo_title_work",
      "text": "Work",
    },
    {
      "name": "todo_title_personal",
      "text": "Personal",
    },
    {
      "name": "todo_title_other",
      "text": "Other",
    },
    {
      "name": "todo_title_monday",
      "text": "monday",
    },
    {
      "name": "todo_title_tuesday",
      "text": "tuesday",
    },
    {
      "name": "todo_title_wednesday",
      "text": "wednesday",
    },
    {
      "name": "todo_title_thursday",
      "text": "thursday",
    },
    {
      "name": "todo_title_friday",
      "text": "friday",
    },
    {
      "name": "todo_title_saturday",
      "text": "saturday",
    },
    {
      "name": "todo_title_sunday",
      "text": "sunday",
    }
    
  ];

  for (category in todoTasks) {

    var bb_object = {
      "name": "",
      "text": "",
    };

    const todo = todoTasks[category];
    var todoText = '';

    for(i in todo) {
      todoText += `- ${todo[i]}\n`
    }

    switch(category){
      case 'Personal':
        bb_object.name = 'todo_item_personal';
        break;
      case 'Work':
        bb_object.name = 'todo_item_work';
        break;
      case 'monday':
        bb_object.name = 'todo_item_monday';
        break;
      case 'tuesday':
        bb_object.name = 'todo_item_tuesday';
        break;
      case 'wednesday':
        bb_object.name = 'todo_item_wednesday';
        break;
      case 'thursday':
        bb_object.name = 'todo_item_thursday';
        break;
      case 'friday':
        bb_object.name = 'todo_item_friday';
        break;
      case 'saturday':
        bb_object.name = 'todo_item_saturday';
        break;
      case 'sunday':
        bb_object.name = 'todo_item_sunday';
        break;
      default:
        bb_object.name = 'todo_item_other'

    }

    bb_object.text = todoText;

    modifications.push(bb_object);
  }

  const images = await bb.create_image(TEMPLATE_ID, {"modifications": modifications}, true);

  return images.image_url_png;
}

