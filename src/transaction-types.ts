export const PRIJEM_PREVODEM_UVNITR_BANKY = 'Příjem převodem uvnitř banky';
export const PLATBA_PREVODEM_UVNITR_BANKY = 'Platba převodem uvnitř banky';
export const POPLATEK = 'Poplatek';
export const VKLAD_POKLADNOU = 'Vklad pokladnou';
export const EVIDOVANY_POPLATEK = 'Evidovaný poplatek';
export const VYBER_POKLADNOU = 'Výběr pokladnou';
export const PREVOD_MEZI_BANKOVNIMI_KONTY_PLATBA = 'Převod mezi bankovními konty (platba)';
export const VKLAD_V_HOTOVOSTI = 'Vklad v hotovosti';
export const PREVOD_MEZI_BANKOVNIMI_KONTY_PRIJEM = 'Převod mezi bankovními konty (příjem)';
export const VYBER_V_HOTOVOSTI = 'Výběr v hotovosti';
export const NEIDENTIFIKOVANA_PLATBA_Z_BANKOVNIHO_KONTA = 'Neidentifikovaná platba z bankovního konta';
export const PLATBA = 'Platba';
export const NEIDENTIFIKOVANY_PRIJEM_NA_BANKOVNI_KONTO = 'Neidentifikovaný příjem na bankovní konto';
export const PRIJEM = 'Příjem';
export const VLASTNI_PLATBA_Z_BANKOVNIHO_KONTA = 'Vlastní platba z bankovního konta';
export const VLASTNI_PRIJEM_NA_BANKOVNI_KONTO = 'Vlastní příjem na bankovní konto';
export const BEZHOTOVOSTNI_PRIJEM = 'Bezhotovostní příjem';
export const VLASTNI_PLATBA_POKLADNOU = 'Vlastní platba pokladnou';
export const PLATBA_KARTOU = 'Platba kartou';
export const VLASTNI_PRIJEM_POKLADNOU = 'Vlastní příjem pokladnou';
export const BEZHOTOVOSTNI_PLATBA = 'Bezhotovostní platba';
export const OPRAVNY_POHYB = 'Opravný pohyb';
export const UROK_Z_UVERU = 'Úrok z úvěru';
export const PRIJATY_POPLATEK = 'Přijatý poplatek';
export const SANKCNI_POPLATEK = 'Sankční poplatek';
export const PLATBA_V_JINE_MENE = 'Platba v jiné měně';
export const POSEL_PREDANI = 'Posel - předání';
export const POPLATEK_PLATEBNI_KARTA = 'Poplatek - platební karta';
export const POSEL_PRIJEM = 'Posel - příjem';
export const INKASO = 'Inkaso';
export const PREVOD_UVNITR_KONTA = 'Převod uvnitř konta';
export const INKASO_VE_PROSPECH_UCTU = 'Inkaso ve prospěch účtu';
export const PRIPSANY_UROK = 'Připsaný úrok';
export const INKASO_Z_UCTU = 'Inkaso z účtu';
export const VYPLACENY_UROK = 'Vyplacený úrok';
export const PRIJEM_INKASA_Z_CIZI_BANKY = 'Příjem inkasa z cizí banky';
export const ODVOD_DANE_Z_UROKU = 'Odvod daně z úroků';
export const EVIDOVANY_UROK = 'Evidovaný úrok';

export type TransactionType = typeof PRIJEM_PREVODEM_UVNITR_BANKY |
    typeof PLATBA_PREVODEM_UVNITR_BANKY |
    typeof POPLATEK |
    typeof VKLAD_POKLADNOU |
    typeof EVIDOVANY_POPLATEK |
    typeof VYBER_POKLADNOU |
    typeof PREVOD_MEZI_BANKOVNIMI_KONTY_PLATBA |
    typeof VKLAD_V_HOTOVOSTI |
    typeof PREVOD_MEZI_BANKOVNIMI_KONTY_PRIJEM |
    typeof VYBER_V_HOTOVOSTI |
    typeof NEIDENTIFIKOVANA_PLATBA_Z_BANKOVNIHO_KONTA |
    typeof PLATBA |
    typeof NEIDENTIFIKOVANY_PRIJEM_NA_BANKOVNI_KONTO |
    typeof PRIJEM |
    typeof VLASTNI_PLATBA_Z_BANKOVNIHO_KONTA |
    typeof VLASTNI_PRIJEM_NA_BANKOVNI_KONTO |
    typeof BEZHOTOVOSTNI_PRIJEM |
    typeof VLASTNI_PLATBA_POKLADNOU |
    typeof PLATBA_KARTOU |
    typeof VLASTNI_PRIJEM_POKLADNOU |
    typeof BEZHOTOVOSTNI_PLATBA |
    typeof OPRAVNY_POHYB |
    typeof UROK_Z_UVERU |
    typeof PRIJATY_POPLATEK |
    typeof SANKCNI_POPLATEK |
    typeof PLATBA_V_JINE_MENE |
    typeof POSEL_PREDANI |
    typeof POPLATEK_PLATEBNI_KARTA |
    typeof POSEL_PRIJEM |
    typeof INKASO |
    typeof PREVOD_UVNITR_KONTA |
    typeof INKASO_VE_PROSPECH_UCTU |
    typeof PRIPSANY_UROK |
    typeof INKASO_Z_UCTU |
    typeof VYPLACENY_UROK |
    typeof PRIJEM_INKASA_Z_CIZI_BANKY |
    typeof ODVOD_DANE_Z_UROKU |
    typeof EVIDOVANY_UROK;
