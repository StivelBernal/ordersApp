@extends('layouts.index')

@section('title'){{ $title ?? '' }}@endsection

@section('contentIndex')
    <div class="Home">
        <h1>Prueba técnica</h1>
        
        <h3 class="m-t-30">Video explicativo</h3>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/D-NeVFxMBgM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        <h3 class="m-t-30 m-b-20">Datos de prueba</h3>

        <code>
            "numero de documento": "1212122",
            "tipo de documento": "1212122",
            "Código pedido": "1212122"
        </code>

        <code>
            "numero de documento": "1212122",
            "tipo de documento": "1212122",
            "Código pedido": "1212122"
        </code>

    </div>
@endsection