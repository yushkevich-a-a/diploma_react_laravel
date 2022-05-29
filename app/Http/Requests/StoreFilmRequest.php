<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class StoreFilmRequest extends FormRequest
{
    protected $stopOnFirstFailure = true;
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'title' => ['required', 'string'],
            'description' => ['required', 'string'],
            'duration' => ['required', 'numeric', 'min:5'],
            'country' => ['required', 'string'],
            'poster' => ['required', 'image'],
        ];
    }

    public function messages()
    {
        return [
            'title.required' => 'Поле "Название фильма" обязательно для заполнения',
            'description.required' => 'Поле "Описание" обязательно для заполнения',
            'duration.required' => 'Поле "Продолжительность" обязательно для заполнения',
            'country.required' => 'Поле "Страна" обязательно для заполнения',
            'poster.required' => '"Постер" обязательно должен быть прикремлен форме',
            'title.string' => 'Поле "Название фильма" должно быть строкой',
            'description.string' => 'Поле "Описание" должно быть строкой',
            'duration.numeric' => 'Поле "Продолжительность" должно быть числом',
            'duration.min' => 'Фильмов с такой продолжительностью не бывает',
            'country.string' => 'Поле "Страна" должно быть строкой',
            'poster.image' => '"Постер" должен быть картинкой',
        ];
    }

    protected function failedValidation(Validator $validator) {
        throw new HttpResponseException(response()->json($validator->errors(), 422));
    }
}
