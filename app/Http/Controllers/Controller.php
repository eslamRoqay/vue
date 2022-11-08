<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{

    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    const RESPONSE_STATUS_OK = 200;
    const RESPONSE_STATUS_ERROR = 400;

    protected function setStatusCode($statusCode)
    {
        $this->statusCode = $statusCode;
        return $this;
    }
    protected function respondWithArray($data, $headers = [])
    {
        return response()->json($data, $data['status'], $headers);
    }
    protected function respondWithSuccess($message = null, $data = [])
    {
        $response = [
            'status' => self::RESPONSE_STATUS_OK,
        ];

        $response['message'] = !empty($message) ? $message : __('Success');

        if (!empty($data)) {
            $response['data'] = $data;
        }

        return $this->setStatusCode(self::RESPONSE_STATUS_OK)->respondWithArray($response);
    }
}
