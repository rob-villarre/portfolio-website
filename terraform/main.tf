resource "digitalocean_project" "portfolio" {
  name        = "Portfolio"
  purpose = "Website or blog"
  description = "My portfolio project"
  environment = "Development"
  is_default  = true  

  resources   = [ digitalocean_app.portfolio-app.urn ]
}

resource "digitalocean_app" "portfolio-app" {

  spec {
    name    = "portfolio-app"
    region  = "tor"

    domain {
      name = "www.ro-va.dev"
    }

    static_site {
      build_command     = "npm run build"
      environment_slug  = "node-js"
      name              = "portfolio-website"
      source_dir        = "portfolio-app"

      github {
        branch          = "main"
        deploy_on_push  = true
        repo            = "rob-villarre/portfolio-website"
      }

      routes {
        path = "/"
        preserve_path_prefix = false
      }
    }
  }

}