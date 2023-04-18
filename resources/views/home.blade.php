@extends('layouts.index')

@section('title'){{ $title ?? '' }}@endsection

@section('contentIndex')
    <div class="Home">
        <h1>Prueba técnica Brayan Stivel Bernal Garcia</h1>

        <div class="desc-test">
            <p>
                Se realizo una aplicación hecha en react con laravel usando un solo repo. Como carácteristicas principales de la aplicación se encuentran las siguientes:
            </p>
    
            <ul>
                <li>1. Uso de context para el estado glabal en la aplicación de react</li>
                <li>2. Consultas de laravel optimizadas</li>
                <li>3. Endpoints  para creación de clientes y ordenes</li>
            </ul>
        </div>
        
        <h3 class="m-t-30">Video explicativo</h3>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/D-NeVFxMBgMAA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        <h3 class="m-t-30 m-b-20">Datos de prueba</h3>

        <code>
            <pre>
                "numero de documento": "123123123",
                "tipo de documento": "CC",
                "Código pedido": "12312"
            </pre>
        </code>


    </div>
@endsection