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
        Schema::create('tickets', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->integer('order_id');
            $table->foreign('order_id')->references('id')->on('orders')->onDelete('cascade');
            $table->integer('session_id');
            $table->foreign('session_id')->references('id')->on('sessions')->onDelete('cascade');
            $table->integer('number_seat');
            $table->foreign('number_seat')->references('number_seat')->on('seats');
            $table->string('date_session');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tickets');
    }
};
