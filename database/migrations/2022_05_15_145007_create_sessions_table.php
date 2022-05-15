<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sessions', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->integer('halls_id');
            $table->foreign('hall_id')->references('id')->on('halls')->onDelete('cascade');
            $table->integer('films_id');
            $table->foreign('films_id')->references('id')->on('halls')->onDelete('cascade');
            $table->dateTime('start_session');
            $table->dateTime('finish_session');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sessions');
    }
};
