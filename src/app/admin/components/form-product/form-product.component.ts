import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { MyValidators } from 'src/app/utils/validators';



@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {
  
  form: FormGroup;
  image$: Observable<any>;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private router: Router,
    private fireStorage: AngularFireStorage
  ) {
    this.buildForm();
   }

  ngOnInit() {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: [0, [Validators.required, MyValidators.isPriceValid]],
      image: '',
      description: ['', [Validators.required]],
    })
  }

  get getPriceField() {
    return this.form.get('price');
  }

  
  get getIdField() {
    return this.form.get('id');
  }

  get getTitleField() {
    return this.form.get('title');
  }


  saveProduct(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const product = this.form.value;
      this.productService.createProduct(product)
      .subscribe( newProduct => {
        console.log(newProduct);
        this.router.navigate(['./admin/products']);
      })
    }
  }

  uploadFile(event) {
    const file = event.target.files[0]; 
    const name = file.name;
    console.log(name);
    
    const fileRef = this.fireStorage.ref(name);
    const task = this.fireStorage.upload(name, file); // Esta tarea es un Observable que depéndera de lo que tarde en subirse la imagen

    task.snapshotChanges()
    .pipe(
      // Cuando termine de cargar la imagen que me de la url para utilizar la imagen
      finalize(() => {
        this.image$ = fileRef.getDownloadURL()
        this.image$.subscribe( url => {
          console.log(url);
          
          this.form.get('image').setValue(url)
        })
      })
    )
    .subscribe();
  }

}
