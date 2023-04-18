<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    public $table = "customers";
    public $timestamps = false;

    use HasFactory;

    protected $fillable = [
        "first_name",
        "last_name",
        "phone",
        "document_number",
        "address",
        "city",
    ];


    public function orders(){
        return $this->hasMany(Order::class, 'customer_id');
    }
    
}