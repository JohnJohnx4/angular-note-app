import { Component, OnInit } from '@angular/core';
import { NotesService } from '../services/notes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.scss']
})
export class AddNotesComponent implements OnInit {
  title: string;
  content: string;
  constructor(private notesService: NotesService, private router: Router) { }

  ngOnInit() {
  }

  logInfo() {
    console.log(this.title, this.content);
  }

  submitNewNote() {
    if (!this.title || !this.content) {
      return console.log('Need notes');
    }
    const note = {
      title: this.title,
      content: this.content
    };
    this.notesService.addNote(note).subscribe((res: any) => {
      if (res.success) {
        this.router.navigateByUrl('/notes');
      }
    }, err => console.log(err));
  }
}
