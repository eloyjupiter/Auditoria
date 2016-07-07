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
        public int ncuest { get; set; }
        public int Trimestre { get; set; }
        public int Año { get; set; }
        public int Reg { get; set; }
        public int Prov { get; set; }
        public string Entrevistada { get; set; }
        public string Responsable { get; set; }
        public int P1 { get; set; }
        public int P2 { get; set; }
        public int P3a { get; set; }
        public int P3b { get; set; }
        public int P4 { get; set; }
        public string P5 { get; set; }
        public string P6 { get; set; }
        public int P7 { get; set; }
        public string P8 { get; set; }
        public string P9 { get; set; }
        public int P10 { get; set; }
        public string P11 { get; set; }
        public int P12a { get; set; }
        public string P12b { get; set; }
        public int P13 { get; set; }
        public string P14 { get; set; }
        public int Digitador { get; set; }
        public int Entrevista { get; set; }

        public IEnumerable<SelectListItem> Regs { get; set; }
        public IEnumerable<SelectListItem> Provs { get; set; }

    }
}