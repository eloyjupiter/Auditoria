using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data.Entity;
using Auditoria.Models;
using Auditoria.ViewModels;

namespace Auditoria.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
           //
            return View();
        }

        [HttpPost]
        public ActionResult Index(Tabla1ViewModel tb1)
        {
            AuditoriaPOAEntities4 db = new AuditoriaPOAEntities4();
            Table_1 t1 = new Table_1();

            t1.Año = tb1.Año;
            t1.Digitador = tb1.Digitador;
            t1.EntrevistaFk = tb1.Entrevista;
            t1.NCuest = tb1.ncuest;
            t1.P1 = tb1.P1;
            t1.P2 = tb1.P2;
            t1.P3a = tb1.P3a;
            t1.P3b = tb1.P3b;
            t1.P4 = tb1.P4;
            t1.P5 = tb1.P5;
            t1.P6 = tb1.P6;
            t1.P7 = tb1.P7;
            t1.P8 = tb1.P8;
            t1.P9 = tb1.P9;
            t1.P10 = tb1.P10;
            t1.P11 = tb1.P11;
            t1.P12 = tb1.P12a;
            t1.P12b = tb1.P12b;
            t1.P13 = tb1.P13;
            t1.P14 = tb1.P14;
            t1.Responsable = tb1.Responsable;
            t1.PersonaEntrevistada = tb1.Entrevistada;
            t1.Provincia = tb1.Prov;
            t1.Region = tb1.Reg;
            t1.Trimestre = tb1.Trimestre;
            db.Table_1.Add(t1);
            db.SaveChanges();


            return View();
        }
    }
}