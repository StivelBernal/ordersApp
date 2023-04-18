<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $table = 'orders';

    public $timestamps = false;

    use HasFactory;

    protected $fillable = [
        "code",
        "delivery_address",
        "status",
        "customer_id"
    ];

    public function customer(){
		return $this->belongsTo(Customer::class, 'customer_id');
    }
    
}
