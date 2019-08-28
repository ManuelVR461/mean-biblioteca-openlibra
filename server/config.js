'use strict'
const fs = require ('fs'); 
const privateKEY = "MIIBOgIBAAJBAIjuBeCIeWFL1BMy1AnmFVLsGQ1AjXBsGwEagkGa1vh4l/khJakYSS4V5Mdrm+GJeFTmrgxEKfMwJTanS3t7oZ8CAwEAAQJASwqG1gJ04sl3s/3LDpG1ZfhV0llqKg5UzkoE0IdXAFvoKkPf74fvlOrcP4O6U8zPStXe9A0n8kxpAMbpKARiQQIhANBZSNVGGkawGH5pCYNFNKFBDuR2R6dIbOcieizDOjRnAiEAqD8xR/OhGUt6wRooF3k9lOf0zIJBiRX9aOwec5rDpgkCIQC4yDb8UCxFvTA8DNRPBDXlPloC7ZQnHOjZJY7N3GfmyQIgL3hc9DsmOhfU08UIiM75dBkaNdWOnhopPMBaOy3wg9kCICvr+sQ5qsW/sh81rChCkiJWD52t7ADwllPCx4SSTUWI";
const publicKEY = "MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAIjuBeCIeWFL1BMy1AnmFVLsGQ1AjXBsGwEagkGa1vh4l/khJakYSS4V5Mdrm+GJeFTmrgxEKfMwJTanS3t7oZ8CAwEAAQ==";

module.exports = {
    TOKEN_SECRET:  process.env.TOKEN_SECRET || privateKEY,
    TOKEN_PUBLIC: publicKEY,
    'database':'mongodb://localhost/dbBiblioteca',
    PORT: process.env.PORT || 3000
};