import { QuantityService } from './../quantity.service';
import { MaterialsService } from 'app/_services/materials.service';
import { MatDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-quantity',
  templateUrl: './add-quantity.component.html',
  styleUrls: ['./add-quantity.component.css']
})
export class AddQuantityComponent implements OnInit {
  materials: any;
  position = 'above';

  // Selections
  selectedMaterial: any;
  selectedQuantity: number;

  constructor(
    private dialogRef: MatDialogRef<AddQuantityComponent>,
    private materialsService: MaterialsService,
    private qtySrv: QuantityService
  ) { }

  ngOnInit() {
    this.getFeatureMaterials();
  }

  getFeatureMaterials() {
    let requiredMaterials: any;
    switch (this.qtySrv.feature_type) {
      case 'hush': requiredMaterials = this.materialsService.materials.felt.sola; break;
      case 'tetria': requiredMaterials = this.materialsService.materials.felt.merino; break;
      case 'clario': requiredMaterials = this.materialsService.materials.felt.sola; break;
    }
    this.materials = requiredMaterials;
  }

  updateSelectedMaterial(material) {
    this.selectedMaterial = material;
    console.log('selectedMaterial:', material);
  }

  quantityDidChange(quantity) {
    console.log('selectedQuantity:', quantity);
    this.selectedQuantity = quantity;
  }

  validateQtyInputs() {
    let isValid = false;
    switch (this.qtySrv.feature_type) {
      case 'hush': isValid = (!!this.selectedMaterial && (this.selectedQuantity > 0)); break;
      case 'tetria': isValid = (!!this.selectedMaterial && (this.selectedQuantity > 0)); break; // TODO FIX THIS
      case 'clario': isValid = (!!this.selectedMaterial && (this.selectedQuantity > 0)); break; // TODO FIX THIS
    }
    return isValid;
  }

  cancel() {
    this.dialogRef.close();
  }

  addToOrder() {
    let selections = {};
    switch (this.qtySrv.feature_type) {
      case 'hush':
        selections = {
          material: this.selectedMaterial,
          qty: this.selectedQuantity
        };
      break;
      case 'tetria':
        selections = {
          material: this.selectedMaterial,
          qty: this.selectedQuantity
        };
      break;
      case 'clario':
        selections = {
          material: this.selectedMaterial,
          qty: this.selectedQuantity
        };
      break;
    }
    this.dialogRef.close(selections);
    console.log('add to order invoked');
  }
}