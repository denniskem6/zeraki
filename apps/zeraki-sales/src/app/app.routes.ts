import { Route } from '@angular/router';


export const appRoutes: Route[] = [

  //declaring app routes, if path is fully empty we redirect to sales dashboard
  {
    path:'',
    pathMatch:'full',
    redirectTo:'sales_dasboard'
  },
  {
    path:'sales_dasboard',
    children:[{
      path:'',
      loadComponent: ()=>import('./sales-agent/sales-agent.component').then(m => m.salesAgentComponent),
    },
    {
      path:'top_card_metrics',
      loadComponent: ()=>import('./sales-agent/sales-agent.component').then(m => m.salesAgentComponent),
    },
    {
      path:'targets_visualization',
      loadComponent: ()=>import('./targets-visualization/targets-visualization.component').then(m => m.TargetVisualizationComponent),
    },
    {
      path:'signups_overview',
      loadComponent: ()=>import('./signup-overview/signup-overview.component').then(m => m.SignupOverviewComponent),
    },
    {
      path:'upcoming_invoices',
      loadComponent: ()=>import('./upcoming-invoices/upcoming-invoices.component').then(m => m.UpcomingInvoicesComponent),
    },
    {
      path:'schools',
      loadComponent: ()=>import('./schools/schools.component').then(m => m.SchoolsComponent),
    },
    {
      path:'invoices',
      loadComponent: ()=>import('./invoices/invoices.component').then(m => m.InvoicesComponent),
    },
    {
      path:'collections',
      loadComponent: ()=>import('./collections/collections.component').then(m => m.CollectionsComponent),
    }]
  }
];
