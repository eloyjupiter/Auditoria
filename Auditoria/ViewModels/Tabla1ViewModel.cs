using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;


namespace Auditoria.ViewModels
{
    public class Tabla1ViewModel
    {
        public string ncuest { get; set; }

        [Required]
        [Range(1,4, ErrorMessage ="Debe ser un numero de 1 a 4")]
        [DisplayName("Trimestre")]
        public string Trimestre { get; set; }

        [Required]
        [DisplayName("Año")]
        public string Año { get; set; }

        [Required]
        [Range (1,10, ErrorMessage ="Debe ser un numero de 1 a 10")]
        [DisplayName("Region")]
        public string Reg { get; set; }

        public IEnumerable<SelectListItem> Regs { get; set; }

        [Required]
        [Range(1, 32, ErrorMessage = "Debe ser un numero de 1 a 32")]
        [DisplayName("Provincias")]
        public string Prov { get; set; }

        public string Entrevistada { get; set; }

        public IEnumerable<SelectListItem> Provs { get; set; }

        public string Responsable { get; set; }

        public string P1 { get; set; }
        public string P2 { get; set; }
        public string P3a { get; set; }
        public string P3b { get; set; }
        public string P4 { get; set; }
        public string P5 { get; set; }
        public string P6 { get; set; }
        public string P7 { get; set; }
        public string P8 { get; set; }
        public string P9 { get; set; }
        public string P10 { get; set; }
        public string P11 { get; set; }
        public string P12a { get; set; }
        public string P12b { get; set; }
        public string P13 { get; set; }
        public string P14 { get; set; }
        public string Digitador { get; set; }

    }
}