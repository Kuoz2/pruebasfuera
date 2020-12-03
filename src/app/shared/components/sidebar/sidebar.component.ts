import {Component, ViewEncapsulation} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {Menu, NavService} from '../../service/nav.service';
import {AutentificacionService} from "../../../Service/autentificacion.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent {

  public  menuItems: Menu[];
  public url: any;
  public fileurl: any;
  private rol: string = "";
  constructor(private router: Router, public navServices: NavService, private log: AutentificacionService) {
    this.navServices.items.subscribe( menuItems => {
      this.menuItems = menuItems
      this.menuItems.forEach(
          res => {
            res.rol = localStorage.getItem( "ACCESS_ROLE" );
          } );
      this.router.events.subscribe( (event) => {
        if (event instanceof NavigationEnd) {
          menuItems.filter( items => {
            if (!items.children) return false
            items.children.filter( subItems => {
              this.setNavActive( subItems )
              if (subItems.path === event.url)
                this.setNavActive( subItems )
              if (!subItems.children) return false
              subItems.children.filter( subSubItems => {

                if (subSubItems.path === event.url)
                  this.setNavActive( subSubItems )
              } )
            } )
          } )
        }
      } )
    } );
    this.roles()
  }


  // Active Nave state
  setNavActive(item) {

    this.menuItems.filter(menuItem => {
      if (menuItem != item)
        menuItem.active = false;
      if (menuItem.children && menuItem.children.includes(item))
        menuItem.active = false;
      if (menuItem.children) {
        menuItem.children.filter(submenuItems => {

          if (submenuItems.children && submenuItems.children.includes(item)) {
            menuItem.active = true
            submenuItems.active = true
          }
        })
      }
    })
  }

  // Click Toggle menu
  toggletNavActive(item) {
    if (!item.active) {
      this.menuItems.forEach(a => {
        if (this.menuItems.includes(item))
          a.active = false
        if (!a.children) return false
        a.children.forEach(b => {
          if (a.children.includes(item)) {
            b.active = false
          }
        })
      });
    }
    item.active = !item.active
  }

  //Fileupload
  readUrl(event: any) {
    if (event.target.files.length === 0)
      return;
    //Image upload validation
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    // Image upload
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.url = reader.result;
    }
  }

  roles(){
    this.rol = localStorage.getItem( "ACCESS_ROLE" )
  }


}
