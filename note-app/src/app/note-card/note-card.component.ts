import { Component, OnInit } from '@angular/core';
import { NotesService } from '../services/notes.service';
import { Note } from '../interfaces/note';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {
  notes: Note[];
  constructor(private notesService: NotesService, private router: Router) {}

  ngOnInit() {
    this.getNotes();
  }

  getNotes() {
    this.notesService.getNotes().subscribe(
      (notes: any) => {
        console.log(notes);
        this.notes = notes.success;
      },
      err => console.log(err)
    );
  }

  addNotePage() {
    this.router.navigateByUrl('/add');
  }
}
