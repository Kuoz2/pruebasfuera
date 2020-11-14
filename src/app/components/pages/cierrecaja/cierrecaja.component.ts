import {Component, OnInit} from '@angular/core';

import {create} from "xmlbuilder2";
import {XMLBuilder} from "xmlbuilder2/lib/interfaces";

@Component({
  selector: 'app-cierrecaja',
  templateUrl: './cierrecaja.component.html',
  styleUrls: ['./cierrecaja.component.scss']
})
export class CierrecajaComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    this.xmlprueba()
  }



  xmlprueba(){
    let datos = 'buscar';
    
    // language=HTML
    const xmlStr = '<xs:schema targetNamespace="http://www.sii.cl/SiiDte" xmlns:SiiDte="http://www.sii.cl/SiiDte" xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xmlns:xs="http://www.w3.org/2001/XMLSchema" elementFormDefault="qualified" attributeFormDefault="unqualified">\n' +
        '\t<xs:import namespace="http://www.w3.org/2000/09/xmldsig#" schemaLocation="xmldsignature_v10.xsd"/>' +
        '<xs:element name="EnvioBOLETA">\n' +
        '\t\t<xs:annotation>\n' +
        '\t\t\t<xs:documentation>Envio de Boletas Electronicas</xs:documentation>\n' +
        '\t\t</xs:annotation>\n' +
        '\t\t<xs:complexType>\n' +
        '\t\t\t<xs:sequence>\n' +
        '\t\t\t\t<xs:element name="SetDTE">\n' +
        '\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t<xs:documentation>Conjunto de Boletas enviadas</xs:documentation>\n' +
        '\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t<xs:complexType>\n' +
        '\t\t\t\t\t\t<xs:sequence>\n' +
        '\t\t\t\t\t\t\t<xs:element name="Caratula">\n' +
        '\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t<xs:documentation>Resumen de Informacion Enviada</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t<xs:complexType>\n' +
        '\t\t\t\t\t\t\t\t\t<xs:sequence>\n' +
        '\t\t\t\t\t\t\t\t\t\t<xs:element name="RutEmisor">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>RUT Emisor de las Boletas</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<xs:simpleType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<xs:restriction base="SiiDte:RUTType"/>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t</xs:simpleType>\n' +
        '\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t<xs:element name="RutEnvia" type="SiiDte:RUTType">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>RUT que envia las Boletas</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t<xs:element name="RutReceptor" type="SiiDte:RUTType">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>RUT al que se le envian las Boletas</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t<xs:element name="FchResol" type="xs:date">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Fecha de Resolucion que Autoriza la Emision de Boletas (AAAA-MM-DD)</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t<xs:element name="NroResol">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Numero de Resolucion que Autoriza la Emision de Boletas</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<xs:simpleType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<xs:restriction base="xs:nonNegativeInteger">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:totalDigits value="6"/>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t</xs:restriction>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t</xs:simpleType>\n' +
        '\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t<xs:element name="TmstFirmaEnv" type="xs:dateTime">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Fecha y Hora de la Firma del Archivo de Envio</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t<xs:element name="SubTotDTE" maxOccurs="2">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Subtotales de Boletas Enviadas</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<xs:complexType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<xs:sequence>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:element name="TpoDTE" type="SiiDte:DTEType">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Tipo de Boleta Enviada</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:element name="NroDTE" type="xs:positiveInteger">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Numero de Boletas Enviadas</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t</xs:sequence>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t</xs:complexType>\n' +
        '\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t</xs:sequence>\n' +
        '\t\t\t\t\t\t\t\t\t<xs:attribute name="version" type="xs:decimal" use="required" fixed="1.0"/>\n' +
        '\t\t\t\t\t\t\t\t</xs:complexType>\n' +
        '\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t<xs:element name="DTE" type="SiiDte:BOLETADefType" maxOccurs="unbounded">\n' +
        '\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t<xs:documentation>Boletas Electronicas Enviadas</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t</xs:sequence>\n' +
        '\t\t\t\t\t\t<xs:attribute name="ID" type="xs:ID" use="required"/>\n' +
        '\t\t\t\t\t</xs:complexType>\n' +
        '\t\t\t\t</xs:element>\n' +
        '\t\t\t\t<xs:element ref="ds:Signature"/>\n' +
        '\t\t\t</xs:sequence>\n' +
        '\t\t\t<xs:attribute name="version" type="xs:decimal" use="required" fixed="1.0"/>\n' +
        '\t\t</xs:complexType>\n' +
        '\t</xs:element>\n' +
        '\t<xs:complexType name="BOLETADefType">\n' +
        '\t\t<xs:annotation>\n' +
        '\t\t\t<xs:documentation>Boleta Electronica</xs:documentation>\n' +
        '\t\t</xs:annotation>\n' +
        '\t\t<xs:sequence>\n' +
        '\t\t\t<xs:element name="Documento">\n' +
        '\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t<xs:documentation>Informacion Tributaria de la Boleta</xs:documentation>\n' +
        '\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t<xs:complexType>\n' +
        '\t\t\t\t\t<xs:sequence>\n' +
        '\t\t\t\t\t\t<xs:element name="Encabezado">\n' +
        '\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t<xs:documentation>Identificacion y Totales del Documento</xs:documentation>\n' +
        '\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t<xs:complexType>\n' +
        '\t\t\t\t\t\t\t\t<xs:sequence>\n' +
        '\t\t\t\t\t\t\t\t\t<xs:element name="IdDoc">\n' +
        '\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Identificacion del DTE</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t<xs:complexType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<xs:sequence>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<xs:element name="TipoDTE" type="SiiDte:DTEType">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Tipo de Boleta</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<xs:element name="Folio" type="SiiDte:FolioType">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Folio del Documento Electronico</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<xs:element name="FchEmis" type="xs:date">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Fecha Emision Contable del DTE (AAAA-MM-DD)</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<xs:element name="IndServicio">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Indica el Tipo de Transaccion</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:simpleType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:restriction base="xs:positiveInteger">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:enumeration value="2">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Boleta de Servicios Periodicos Domiciliarios</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:enumeration>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:restriction>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:simpleType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t</xs:sequence>\n' +
        '\t\t\t\t\t\t\t\t\t\t</xs:complexType>\n' +
        '\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t<xs:element name="Emisor">\n' +
        '\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Datos del Emisor</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t<xs:complexType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<xs:sequence>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<xs:element name="RUTEmisor" type="SiiDte:RUTType">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>RUT del Emisor del DTE</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<xs:element name="RznSocEmisor" minOccurs="0">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Nombre o Razon Social del Emisor</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:simpleType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:restriction base="xs:string">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:maxLength value="100"/>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:restriction>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:simpleType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<xs:element name="GiroEmisor" minOccurs="0">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Giro del Emisor que Corresponde a la Transaccion</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:simpleType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:restriction base="xs:string">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:maxLength value="80"/>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:restriction>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:simpleType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<xs:element name="CdgSIISucur" minOccurs="0">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Codigo de Sucursal Entregado por el SII</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:simpleType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:restriction base="xs:positiveInteger">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:totalDigits value="9"/>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:restriction>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:simpleType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<xs:element name="DirOrigen" minOccurs="0">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Direccion de Origen o Emision</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:simpleType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:restriction base="xs:string">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:maxLength value="70"/>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:restriction>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:simpleType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<xs:element name="CmnaOrigen" minOccurs="0">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Comuna de Origen</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:simpleType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:restriction base="xs:string">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:maxLength value="20"/>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:restriction>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:simpleType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<xs:element name="CiudadOrigen" minOccurs="0">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Ciudad de Origen</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:simpleType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:restriction base="xs:string">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:maxLength value="20"/>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:restriction>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:simpleType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t</xs:sequence>\n' +
        '\t\t\t\t\t\t\t\t\t\t</xs:complexType>\n' +
        '\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t<xs:element name="Receptor">\n' +
        '\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Datos del Receptor</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t<xs:complexType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<xs:sequence>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<xs:element name="RUTRecep" type="SiiDte:RUTType">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>RUT del Receptor del DTE</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<xs:element name="CdgIntRecep" minOccurs="0">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Codigo Interno del Receptor</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:simpleType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:restriction base="xs:string">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:maxLength value="20"/>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:restriction>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:simpleType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<xs:element name="RznSocRecep" minOccurs="0">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Nombre o Razon Social del Receptor</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:simpleType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:restriction base="xs:string">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:maxLength value="100"/>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:restriction>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:simpleType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<xs:element name="Contacto" minOccurs="0">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Telefono o E-mail de Contacto del Receptor</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:simpleType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:restriction base="xs:string">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:maxLength value="80"/>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:restriction>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:simpleType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<xs:element name="DirRecep" minOccurs="0">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Direccion en la Cual se Envian los Productos o se Prestan los Servicios</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:simpleType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:restriction base="xs:string">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:maxLength value="70"/>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:restriction>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:simpleType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<xs:element name="CmnaRecep" minOccurs="0">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Comuna de Recepcion</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:simpleType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:restriction base="xs:string">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:maxLength value="20"/>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:restriction>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:simpleType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<xs:element name="CiudadRecep" minOccurs="0">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Ciudad de Recepcion</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:simpleType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:restriction base="xs:string">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:maxLength value="20"/>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:restriction>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:simpleType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<xs:element name="DirPostal" minOccurs="0">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Direccion Postal</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:simpleType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:restriction base="xs:string">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:maxLength value="70"/>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:restriction>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:simpleType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<xs:element name="CmnaPostal" minOccurs="0">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Comuna Postal</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:simpleType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:restriction base="xs:string">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:maxLength value="20"/>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:restriction>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:simpleType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<xs:element name="CiudadPostal" minOccurs="0">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Ciudad Postal</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:simpleType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:restriction base="xs:string">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:maxLength value="20"/>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:restriction>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:simpleType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t</xs:sequence>\n' +
        '\t\t\t\t\t\t\t\t\t\t</xs:complexType>\n' +
        '\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t<xs:element name="Totales">\n' +
        '\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Montos Totales del DTE</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t<xs:complexType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<xs:sequence>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<xs:element name="MntNeto" type="SiiDte:MontoType" minOccurs="0">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Monto Neto</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<xs:element name="MntExe" type="SiiDte:MontoType" minOccurs="0">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Monto Exento</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<xs:element name="IVA" type="SiiDte:MntImpType" minOccurs="0">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Monto de IVA</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<xs:element name="MntTotal" type="SiiDte:MontoType">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Monto Total</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<xs:element name="MontoNF" type="SiiDte:ValorType" minOccurs="0">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Monto No Facturable - Corresponde a Bienes o Servicios Facturados Previamente</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<xs:element name="TotalPeriodo" type="SiiDte:MontoType" minOccurs="0">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Total de Ventas o Servicios del Periodo</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<xs:element name="SaldoAnterior" type="SiiDte:ValorType" minOccurs="0">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Saldo Anterior - Puede ser Negativo o Positivo</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<xs:element name="VlrPagar" type="SiiDte:ValorType" minOccurs="0">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Valor a Pagar Total del Documento</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t</xs:sequence>\n' +
        '\t\t\t\t\t\t\t\t\t\t</xs:complexType>\n' +
        '\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t</xs:sequence>\n' +
        '\t\t\t\t\t\t\t</xs:complexType>\n' +
        '\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t<xs:element name="Detalle" maxOccurs="1000">\n' +
        '\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t<xs:documentation>Detalle de Itemes del Documento</xs:documentation>\n' +
        '\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t<xs:complexType>\n' +
        '\t\t\t\t\t\t\t\t<xs:sequence>\n' +
        '\t\t\t\t\t\t\t\t\t<xs:element name="NroLinDet" type="xs:positiveInteger">\n' +
        '\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Numero Secuencial de Linea</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t<xs:element name="CdgItem" minOccurs="0" maxOccurs="5">\n' +
        '\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Codificacion del Item</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t<xs:complexType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<xs:sequence>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<xs:element name="TpoCodigo">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Tipo de Codificacion</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:simpleType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:restriction base="xs:string">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:maxLength value="10"/>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:restriction>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:simpleType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<xs:element name="VlrCodigo">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Valor del Codigo de Item, para la Codificacion Particular</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:simpleType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:restriction base="xs:string">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:maxLength value="35"/>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:restriction>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:simpleType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t</xs:sequence>\n' +
        '\t\t\t\t\t\t\t\t\t\t</xs:complexType>\n' +
        '\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t<xs:element name="IndExe" minOccurs="0">\n' +
        '\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Indicador de Exencion/Facturacion</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t<xs:simpleType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<xs:restriction base="xs:positiveInteger">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<xs:enumeration value="1">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Producto o Servicio es Exento o No Afecto</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t</xs:enumeration>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<xs:enumeration value="2">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>El Producto o Servicio NO ES Facturable</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t</xs:enumeration>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<xs:enumeration value="6"/>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t</xs:restriction>\n' +
        '\t\t\t\t\t\t\t\t\t\t</xs:simpleType>\n' +
        '\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t<xs:element name="RUTMandante" type="SiiDte:RUTType" minOccurs="0">\n' +
        '\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Rut de la Empresa Mandante de la Boleta</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t<xs:element name="NmbItem">\n' +
        '\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Nombre del Item</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t<xs:simpleType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<xs:restriction base="xs:string">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<xs:maxLength value="80"/>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t</xs:restriction>\n' +
        '\t\t\t\t\t\t\t\t\t\t</xs:simpleType>\n' +
        '\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t<xs:element name="DscItem" minOccurs="0">\n' +
        '\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Descripcion del Item</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t<xs:simpleType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<xs:restriction base="xs:string">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<xs:maxLength value="1000"/>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t</xs:restriction>\n' +
        '\t\t\t\t\t\t\t\t\t\t</xs:simpleType>\n' +
        '\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t</xs:sequence>\n' +
        '\t\t\t\t\t\t\t</xs:complexType>\n' +
        '\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t<xs:element name="SubTotInfo" minOccurs="0" maxOccurs="20">\n' +
        '\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t<xs:documentation>Subtotales Informativos</xs:documentation>\n' +
        '\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t<xs:complexType>\n' +
        '\t\t\t\t\t\t\t\t<xs:sequence>\n' +
        '\t\t\t\t\t\t\t\t\t<xs:element name="NroSTI">\n' +
        '\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Número de Subtotal </xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t<xs:simpleType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<xs:restriction base="xs:positiveInteger">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<xs:maxInclusive value="99"/>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t</xs:restriction>\n' +
        '\t\t\t\t\t\t\t\t\t\t</xs:simpleType>\n' +
        '\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t<xs:element name="GlosaSTI" minOccurs="0">\n' +
        '\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Glosa</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t<xs:simpleType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<xs:restriction base="xs:string">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<xs:maxLength value="80"/>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t</xs:restriction>\n' +
        '\t\t\t\t\t\t\t\t\t\t</xs:simpleType>\n' +
        '\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t<xs:element name="OrdenSTI">\n' +
        '\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Ubicación para Impresión </xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t<xs:simpleType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<xs:restriction base="xs:positiveInteger">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<xs:maxInclusive value="99"/>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t</xs:restriction>\n' +
        '\t\t\t\t\t\t\t\t\t\t</xs:simpleType>\n' +
        '\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t<xs:element name="SubTotNetoSTI" type="SiiDte:Dec1Type" minOccurs="0">\n' +
        '\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Valor Neto del Subtotal</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t<xs:element name="SubTotIVASTI" type="SiiDte:Dec1Type" minOccurs="0">\n' +
        '\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Valor del IVA del Subtotal</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t<xs:element name="SubTotAdicSTI" type="SiiDte:Dec1Type" minOccurs="0">\n' +
        '\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Valor de los Impuestos adicionales o específicos del Subtotal</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t<xs:element name="SubTotExeSTI" type="SiiDte:Dec1Type" minOccurs="0">\n' +
        '\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Valor no Afecto o Exento del Subtotal</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t<xs:element name="ValSubtotSTI" type="SiiDte:Dec1Type" minOccurs="0">\n' +
        '\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Valor de la línea de subtotal</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t<xs:element name="LineasDeta" minOccurs="0" maxOccurs="60">\n' +
        '\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>TABLA de  Líneas de Detalle que se agrupan en el Subtotal</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t<xs:simpleType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<xs:restriction base="xs:positiveInteger">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<xs:maxInclusive value="60"/>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t</xs:restriction>\n' +
        '\t\t\t\t\t\t\t\t\t\t</xs:simpleType>\n' +
        '\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t</xs:sequence>\n' +
        '\t\t\t\t\t\t\t</xs:complexType>\n' +
        '\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t<xs:element name="TED">\n' +
        '\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t<xs:documentation>Timbre Electronico de la Boleta</xs:documentation>\n' +
        '\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t<xs:complexType>\n' +
        '\t\t\t\t\t\t\t\t<xs:sequence>\n' +
        '\t\t\t\t\t\t\t\t\t<xs:element name="DD">\n' +
        '\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Datos Basicos de Documento</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t<xs:complexType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<xs:sequence>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<xs:element name="RE" type="SiiDte:RUTType">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>RUT Emisor</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<xs:element name="TD" type="SiiDte:DTEType">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Tipo DTE</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<xs:element name="F" type="SiiDte:FolioType">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Folio DTE</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<xs:element name="FE" type="xs:date">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Fecha Emision DTE en Formato AAAA-MM-DD</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<xs:element name="RR" type="SiiDte:RUTType">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>RUT Receptor</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<xs:element name="RSR">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Razon Sociall Receptor</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:simpleType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:restriction base="xs:string">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:maxLength value="40"/>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:restriction>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:simpleType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<xs:element name="MNT" type="xs:unsignedLong">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Monto Total DTE</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<xs:element name="IT1">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Descripcion Primer Item de Detalle</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:simpleType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:restriction base="xs:string">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:maxLength value="40"/>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:restriction>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:simpleType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<xs:element name="CAF">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Codigo Autorizacion Folios</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:complexType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:sequence>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:element name="DA">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Datos de Autorizacion de Folios</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:complexType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:sequence>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:element name="RE" type="SiiDte:RUTType">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>RUT Emisor</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:element name="RS">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Razon Social Emisor</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:simpleType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:restriction base="xs:string">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:maxLength value="40"/>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:restriction>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:simpleType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:element name="TD" type="SiiDte:DTEType">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Tipo DTE</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:element name="RNG">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Rango Autorizado de Folios</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:complexType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:sequence>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:element name="D" type="SiiDte:FolioType">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Folio Inicial (Desde)</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:element name="H" type="SiiDte:FolioType">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Folio Final (Hasta)</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:sequence>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:complexType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:element name="FA" type="xs:date">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Fecha Autorizacion en Formato AAAA-MM-DD</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:choice>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:element name="RSAPK">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Clave Publica RSA del Solicitante</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:complexType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:sequence>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:element name="M" type="xs:base64Binary">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Modulo RSA</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:element name="E" type="xs:base64Binary">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Exponente RSA</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:sequence>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:complexType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:element name="DSAPK">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Clave Publica DSA del Solicitante</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:complexType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:sequence>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:element name="P" type="xs:base64Binary">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Modulo Primo</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:element name="Q" type="xs:base64Binary">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Entero Divisor de P - 1</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:element name="G" type="xs:base64Binary">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Entero f(P, Q)</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:element name="Y" type="xs:base64Binary">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>G**X mod P</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:sequence>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:complexType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:choice>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:element name="IDK" type="xs:long">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Identificador de Llave</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:sequence>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:complexType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:element name="FRMA">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Firma Digital (RSA) del SII Sobre DA</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:complexType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:simpleContent>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:extension base="xs:base64Binary">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:attribute name="algoritmo" type="xs:string" use="required" fixed="SHA1withRSA"/>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:extension>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:simpleContent>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:complexType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:sequence>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:attribute name="version" use="required" fixed="1.0"/>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:complexType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<xs:element name="TSTED" type="xs:dateTime">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>TimeStamp de Generacion del Timbre</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t</xs:sequence>\n' +
        '\t\t\t\t\t\t\t\t\t\t</xs:complexType>\n' +
        '\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t\t<xs:element name="FRMT">\n' +
        '\t\t\t\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<xs:documentation>Valor de Firma Digital  sobre DD</xs:documentation>\n' +
        '\t\t\t\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t\t\t<xs:complexType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<xs:simpleContent>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<xs:extension base="xs:base64Binary">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:attribute name="algoritmo" use="required">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:simpleType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:restriction base="xs:string">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:enumeration value="SHA1withRSA"/>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<xs:enumeration value="SHA1withDSA"/>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:restriction>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:simpleType>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</xs:attribute>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t</xs:extension>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t</xs:simpleContent>\n' +
        '\t\t\t\t\t\t\t\t\t\t</xs:complexType>\n' +
        '\t\t\t\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t\t\t</xs:sequence>\n' +
        '\t\t\t\t\t\t\t\t<xs:attribute name="version" use="required" fixed="1.0"/>\n' +
        '\t\t\t\t\t\t\t</xs:complexType>\n' +
        '\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t\t<xs:element name="TmstFirma" type="xs:dateTime">\n' +
        '\t\t\t\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t\t\t\t<xs:documentation>Fecha y Hora en que se Firmo Digitalmente el Documento AAAA-MM-DDTHH:MI:SS</xs:documentation>\n' +
        '\t\t\t\t\t\t\t</xs:annotation>\n' +
        '\t\t\t\t\t\t</xs:element>\n' +
        '\t\t\t\t\t</xs:sequence>\n' +
        '\t\t\t\t\t<xs:attribute name="ID" type="xs:ID" use="required"/>\n' +
        '\t\t\t\t</xs:complexType>\n' +
        '\t\t\t</xs:element>\n' +
        '\t\t\t<xs:element ref="ds:Signature"/>\n' +
        '\t\t</xs:sequence>\n' +
        '\t\t<xs:attribute name="version" type="xs:decimal" use="required" fixed="1.0"/>\n' +
        '\t</xs:complexType>\n' +
        '\t<xs:simpleType name="RUTType">\n' +
        '\t\t<xs:annotation>\n' +
        '\t\t\t<xs:documentation>Rol Unico Tributario (99..99-X)</xs:documentation>\n' +
        '\t\t</xs:annotation>\n' +
        '\t\t<xs:restriction base="xs:string">\n' +
        '\t\t\t<xs:maxLength value="10"/>\n' +
        '\t\t\t<xs:minLength value="3"/>\n' +
        '\t\t\t<xs:pattern value="[0-9]+-([0-9]|K)"/>\n' +
        '\t\t</xs:restriction>\n' +
        '\t</xs:simpleType>\n' +
        '\t<xs:simpleType name="DTEType">\n' +
        '\t\t<xs:annotation>\n' +
        '\t\t\t<xs:documentation>Tipos de Documentos Tributarios Electronicos</xs:documentation>\n' +
        '\t\t</xs:annotation>\n' +
        '\t\t<xs:restriction base="xs:positiveInteger">\n' +
        '\t\t\t<xs:enumeration value="39">\n' +
        '\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t<xs:documentation>Boleta Electronica</xs:documentation>\n' +
        '\t\t\t\t</xs:annotation>\n' +
        '\t\t\t</xs:enumeration>\n' +
        '\t\t\t<xs:enumeration value="41">\n' +
        '\t\t\t\t<xs:annotation>\n' +
        '\t\t\t\t\t<xs:documentation>Boleta Exenta Electronica</xs:documentation>\n' +
        '\t\t\t\t</xs:annotation>\n' +
        '\t\t\t</xs:enumeration>\n' +
        '\t\t</xs:restriction>\n' +
        '\t</xs:simpleType>\n' +
        '\t<xs:simpleType name="MntImpType">\n' +
        '\t\t<xs:annotation>\n' +
        '\t\t\t<xs:documentation>Monto de Impuesto - 18 digitos</xs:documentation>\n' +
        '\t\t</xs:annotation>\n' +
        '\t\t<xs:restriction base="xs:positiveInteger">\n' +
        '\t\t\t<xs:totalDigits value="18"/>\n' +
        '\t\t</xs:restriction>\n' +
        '\t</xs:simpleType>\n' +
        '\t<xs:simpleType name="MontoType">\n' +
        '\t\t<xs:annotation>\n' +
        '\t\t\t<xs:documentation>Monto de 18 digitos - Incluye el cero</xs:documentation>\n' +
        '\t\t</xs:annotation>\n' +
        '\t\t<xs:restriction base="xs:nonNegativeInteger">\n' +
        '\t\t\t<xs:totalDigits value="18"/>\n' +
        '\t\t</xs:restriction>\n' +
        '\t</xs:simpleType>\n' +
        '\t<xs:simpleType name="ValorType">\n' +
        '\t\t<xs:annotation>\n' +
        '\t\t\t<xs:documentation>Monto de 18 digitos - Positivo o Negativo</xs:documentation>\n' +
        '\t\t</xs:annotation>\n' +
        '\t\t<xs:restriction base="xs:integer">\n' +
        '\t\t\t<xs:totalDigits value="18"/>\n' +
        '\t\t</xs:restriction>\n' +
        '\t</xs:simpleType>\n' +
        '\t<xs:simpleType name="FolioType">\n' +
        '\t\t<xs:annotation>\n' +
        '\t\t\t<xs:documentation>Folio de DTE - 10 digitos</xs:documentation>\n' +
        '\t\t</xs:annotation>\n' +
        '\t\t<xs:restriction base="xs:positiveInteger">\n' +
        '\t\t\t<xs:totalDigits value="10"/>\n' +
        '\t\t</xs:restriction>\n' +
        '\t</xs:simpleType>\n' +
        '\t<xs:simpleType name="Dec1Type">\n' +
        '\t\t<xs:annotation>\n' +
        '\t\t\t<xs:documentation>Monto con 16 Digitos de Cuerpo y 2 Decimales </xs:documentation>\n' +
        '\t\t</xs:annotation>\n' +
        '\t\t<xs:restriction base="xs:decimal">\n' +
        '\t\t\t<xs:totalDigits value="18"/>\n' +
        '\t\t\t<xs:fractionDigits value="2"/>\n' +
        '\t\t\t<xs:minExclusive value="0"/>\n' +
        '\t\t</xs:restriction>\n' +
        '\t</xs:simpleType>\n' +
        '\t<xs:simpleType name="Dec5Type">\n' +
        '\t\t<xs:annotation>\n' +
        '\t\t\t<xs:documentation>Monto con 12 Digitos de Cuerpo y 6 Decimales</xs:documentation>\n' +
        '\t\t</xs:annotation>\n' +
        '\t\t<xs:restriction base="xs:decimal">\n' +
        '\t\t\t<xs:totalDigits value="18"/>\n' +
        '\t\t\t<xs:fractionDigits value="6"/>\n' +
        '\t\t\t<xs:minExclusive value="0"/>\n' +
        '\t\t</xs:restriction>\n' +
        '\t</xs:simpleType>\n' +
        '\t<xs:simpleType name="PctType">\n' +
        '\t\t<xs:annotation>\n' +
        '\t\t\t<xs:documentation>Monto de Porcentaje ( 3 y 2)</xs:documentation>\n' +
        '\t\t</xs:annotation>\n' +
        '\t\t<xs:restriction base="xs:decimal">\n' +
        '\t\t\t<xs:totalDigits value="5"/>\n' +
        '\t\t\t<xs:fractionDigits value="2"/>\n' +
        '\t\t\t<xs:minInclusive value="0.01"/>\n' +
        '\t\t\t<xs:maxInclusive value="999.99"/>\n' +
        '\t\t</xs:restriction>\n' +
        '\t</xs:simpleType>\n' +
        '</xs:schema>\n';
    let doc: XMLBuilder;
    doc = create( xmlStr ).dec( {version: "1.0",encoding: 'ISO-8859-1'} );
// append a 'baz' element to the root node of the document
    doc.root().ele('baz');
    const xml = doc.end({ prettyPrint: true });
    console.log(xml);
 }

 //Se ara un boton para generar el xml
 /*xmltojson(xml){
   let filename = 'people.xml';
   let text = await xml
   let element = document.createElement('a');
   element.setAttribute('href', 'data:text/xml;charset=utf-8,' + encodeURIComponent(text));
   element.setAttribute('download', filename);

   element.style.display = 'none';
   document.body.appendChild(element);

   element.click();

   document.body.removeChild(element);
       }*/

}
