import { Component } from "@angular/core";

interface IList {
  id: number;
  title: string;
  details: string;
  complete: boolean;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  eventTitle: string = "";
  eventName: string = "";
  editField: boolean = false;
  editedIndex: number;
  inputChecked: boolean = false;
  // formValue : string;

  lists: IList[] = [
    {
      id: 1,
      title: "Study",
      details: "Go to the library to study",
      complete: false,
    },
    {
      id: 2,
      title: "Travel",
      details: "Go to the airport to travel",
      complete: false,
    },
    {
      id: 3,
      title: "Church",
      details: "Go to the Church to pray",
      complete: false,
    },
  ];

  handleSubmit(event: any, titleValue: string, nameValue: string) {
    event.preventDefault();
    if (titleValue && nameValue && !this.editField) {
      this.lists.push({
        id: this.lists.length + 1,
        title: titleValue,
        details: nameValue,
        complete: false,
      });
      this.eventName = "";
      this.eventTitle = "";
    }
  }

  handleEdit(i: number) {
    this.editField = true;
    this.eventTitle = this.lists[i].title;
    this.eventName = this.lists[i].details;
    this.editedIndex = i;
  }

  handleUpdate(event: any, titleValue: string, nameValue: string) {
    event.preventDefault();
    if (titleValue && nameValue && this.editField) {
      this.lists[this.editedIndex].title = this.eventTitle;
      this.lists[this.editedIndex].details = this.eventName;
      this.eventName = "";
      this.eventTitle = "";
      this.editField = false;
    }
  }

  onInputChecked(event: any, i) {
    event.preventDefault();
    this.lists[i].complete = !this.lists[i].complete;
  }

  handleDelete(i: number) {
    this.lists.splice(i, 1);
  }
}
