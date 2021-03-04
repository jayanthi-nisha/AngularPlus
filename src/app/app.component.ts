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

//Format the Phone number with slash
  FormatPhoneNumber(phonenumber: string) {
  if (phonenumber != undefined && phonenumber != '') {
        phonenumber = phonenumber.split('-').join('').split('_').join('');
      phonenumber = phonenumber.substr(0, 3) + '-' + phonenumber.substr(3);
      phonenumber = phonenumber.substr(0, 7) + '-' + phonenumber.substr(7);
  }
  return phonenumber;
}

//Format the SSN number
FormatSSN(ssn: string) {
  let a = 5;
  let b;
  if (ssn != undefined && ssn.trim() != '') {
      ssn = ssn.replace('-', '').replace('-', '').replace('-', '');
      ssn = ssn.substr(0, 3) + '-' + ssn.substr(3);
      ssn = ssn.substr(0, 6) + '-' + ssn.substr(6);
  }
  return ssn;

}

}
