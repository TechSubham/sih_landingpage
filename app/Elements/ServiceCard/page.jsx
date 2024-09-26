"use client";
import React from "react";
import style from "./style.css";
import { PieChartComponent } from "@/components/StyleComponents/Piechart";
import { LineChartComponent } from "@/components/StyleComponents/LineChart";
import Alert from "../GmailCard"

const page = () => {
  return (
    <div>
      <div class="container">
        <div style={{ "--r": "-15;" }} class="glass">
          <PieChartComponent />
        </div>
        <div style={{ "--r": "5;" }} class="glass">
          <LineChartComponent />
        </div>
        <div style={{ "--r": "25;" }} class="glass">
            <Alert/>
        </div>
      </div>
    </div>
  );
};

export default page;
