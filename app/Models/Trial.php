<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Trial extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'court_id',
        'file_id',
        'type',
        'document',
        'solution',
        'date',
    ];

    public function file()
    {
      return $this->belongsTo(File::class);
    }

    public function court()
    {
      return $this->belongsTo(Court::class);
    }
}
