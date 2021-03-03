import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularPlus';

  storeInLocalStorage(key: string, value: string) {
    localStorage.setItem(key, value);
}

// Getting from Local Storage
getFromLocalStorage(key: string): string {
    let a;
    const value = localStorage.getItem(key) ? localStorage.getItem(key) || '{}' : '{}';
    return value;
}

// Clearing Local Storage
clearLocalStorage() {
    localStorage.clear();
}

// Storing in Session Storage
storeInSessionStorage(key: string, value: string) {
    sessionStorage.setItem(key, value);
}

// Getting from Session Storage
  getFromSessionStorage = (key: string) => {
    const value = sessionStorage.getItem(key) ? sessionStorage.getItem(key) : undefined;
      return value;
}

// Clearing Session Storage
clearSessionStorage() {
    sessionStorage.clear();
}

}
