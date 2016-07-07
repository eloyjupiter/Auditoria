using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Auditoria.Models;
using System.Web.Mvc;

namespace Auditoria.ViewModels
{
    public class DDLViewModels
    {
        AuditoriaPOAEntities4 db = new AuditoriaPOAEntities4();

        public List<SelectListItem> Reg()
        {
            var re = from a in db.Regiones
                     select a.RegId;
            List<SelectListItem> li = new List<SelectListItem>();
            li.Add(new SelectListItem { Text = "", Value = "" });
            foreach (var item in re)
            {
                if (item < 10)
                {
                    li.Add(new SelectListItem { Text = "0" + item.ToString(), Value = "0" + item.ToString() });
                }
                else
                {
                    li.Add(new SelectListItem { Text = item.ToString(), Value = item.ToString() });
                }
            }
            return li; 
        }

        public List<SelectListItem> Prov(/*int s*/)
        {
            var pr = from b in db.Provincias
                     //where b.RegFk == s
                     select b.ProvPk;
            List<SelectListItem> li = new List<SelectListItem>();
            foreach (var item in pr)
            {
                if (item<10)
                {
                    li.Add(new SelectListItem { Text = "0"+item.ToString(), Value = "0"+item.ToString() });
                }
                else
                {
                    li.Add(new SelectListItem { Text = item.ToString(), Value = item.ToString() }); 
                }
            }
            return li;
        }

    }
}