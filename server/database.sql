CREATE TABLE price_paid_sample (
    id SERIAL PRIMARY KEY,
    trx_uid UUID,
    price NUMERIC,
    transfer_date DATE,
    postcode VARCHAR(8),
    property_type CHAR(1),
    age CHAR(1),
    duration CHAR(1),
    paon VARCHAR(255),
    soan VARCHAR(255),
    street VARCHAR(255),
    locality VARCHAR(255),
    city VARCHAR(255),
    district VARCHAR(255),
    county VARCHAR(255),
    ppd_cat_type CHAR(1),
    record_status CHAR(1)
);

SELECT DATE_TRUNC('month', transfer_date) AS month, AVG(price) AS average_price
        FROM public.price_paid_complete
        WHERE postcode LIKE 'LE1' || '%'
        GROUP BY month
        ORDER BY month;



ALTER TABLE public.price_paid_complete ADD COLUMN transfer_year INT;
UPDATE public.price_paid_complete SET transfer_year = EXTRACT(YEAR FROM transfer_date)::INT;

select max(transfer_date) from public.price_paid_complete;

ALTER TABLE public.price_paid_complete DROP COLUMN trx_uid;