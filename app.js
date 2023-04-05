const express = require('express')
const sqlite3 = require('sqlite3').verbose()
const morgan = require('morgan')
const app = express()

// middleware
const logger = morgan('combined')

// routes

