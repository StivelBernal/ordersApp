<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $orders = Order::with('customer')->orderBy("id","desc")->get();

        return response()->json([
            "orders" => $orders
        ]);
    }

    public function getForId($id)
    {
        $orders = Order::with('customer')->where('id', $id)->orderBy("id","desc")->get();

        return response()->json([
            "orders" => $orders
        ]);
    }

    public function searchOrder(Request $request)
    {
        $params = $request->query();

        $customer = Customer::where("document_number", $params['document_number'])->where("document_type", $params['document_type'])->first();

        if(!isset($customer)) {
            return response()->json([
                "customer" => $customer
            ]);
        }

        $orders = Order::with('customer')->where('code', $params['code'])->where('customer_id', $customer->id)->first();

        return response()->json([
            "customer" => $customer,
            "order" => $orders
        ]);
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $customer = Order::create($request->all());
        return response()->json([
            "customer" => $customer,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
