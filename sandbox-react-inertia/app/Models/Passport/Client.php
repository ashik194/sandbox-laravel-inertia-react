<?php

namespace App\Models\Passport;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Passport\Client as BaseClient;

class Client extends Model
{
    use HasFactory;
    public function skipsAuthorization(): bool
    {
        return $this->firstParty();
    }
}
