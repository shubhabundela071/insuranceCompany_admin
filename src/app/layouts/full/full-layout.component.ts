import { Component, OnInit, ElementRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavigationEnd, ActivatedRoute, Router } from '@angular/router';

var fireRefreshEventOnWindow = function() {
  var evt = document.createEvent('HTMLEvents');
  evt.initEvent('resize', true, false);
  window.dispatchEvent(evt);
};

@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.scss']
})
export class FullLayoutComponent implements OnInit {
  options = {
    direction: 'ltr'
  };
  routemap:any;
  allRoutes:any[]=[];
  routeName:any;
  constructor(private elementRef: ElementRef,
    private route: Router,
    private activatedRoute: ActivatedRoute) {
    
  }

  ngOnInit() {
    //sidebar toggle event listner
    // this.elementRef.nativeElement.querySelector('#sidebarToggle')
    //     .addEventListener('click', this.onClick.bind(this));
  }


  changeOfRoutes() {
    this.route.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        this.routemap = event.url;
        this.allRoutes = this.routemap.split("/");
       // this.allRoutes[1] = "users",
        if (this.allRoutes [1] == "users")
        {
          this.allRoutes[1] = "Customers List"
        }
        if (this.allRoutes [1] == "view-payment")
        {
          this.allRoutes[1] = "View Payments"
        }
        if (this.allRoutes [1] == "logistics-owner")
        {
          this.allRoutes[1] = "Owner ( Logistics )"
        }
        if (this.allRoutes [1] == "driver")
        {
          this.allRoutes[1] = "Driver ( Logistics )"
        }
        if (this.allRoutes [1] == "orders")
        {
          this.allRoutes[1] = "Orders ( Logistics )"
        }
        if (this.allRoutes [1] == "open-jobs")
        {
          this.allRoutes[1] = "Open Jobs ( Logistics )"
        }
        if (this.allRoutes [1] == "owner")
        {
          this.allRoutes[1] = "Owner ( Commodity )"
        }
        if (this.allRoutes [1] == "commodities-driver")
        {
          this.allRoutes[1] = "Driver ( Commodities )"
        }
        if (this.allRoutes [1] == "commodities-orders")
        {
          this.allRoutes[1] = "Orders ( Commodities )"
        }
        if (this.allRoutes [1] == "products")
        {
          this.allRoutes[1] = "Categories & Products (Commodity)"
        }
        if (this.allRoutes [1] == "category")
        {
          this.allRoutes[1] = "Category ( Commodity )"
        }
        if (this.allRoutes [1] == "commodities-order-detail")
        {
          this.allRoutes[1] = "Order Details"
        }
        // if (this.allRoutes [1] == "commodities-order-detail")
        // {
        //   this.allRoutes[1] = "Order Details"
        // }
        
        this.routeName=this.allRoutes[1];
      }
    })
  }

  onClick(event) {
    //initialize window resizer event on sidebar toggle click event
    setTimeout(() => {
      fireRefreshEventOnWindow();
    }, 300);
  }

  getOptions($event): void {
    this.options = $event;
  }
}
