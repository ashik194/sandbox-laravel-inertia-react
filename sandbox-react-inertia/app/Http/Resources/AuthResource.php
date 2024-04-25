<?php

namespace App\Http\Resources;

use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AuthResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray($request): array|\JsonSerializable|Arrayable
    {
        return [
            'name'      => $this->name,
            'email'     => $this->email,
            'password'  => $this->password,
        ];
    }
}
